
import { Request, Response, NextFunction } from 'express';



import { PrismaClient, Prisma } from '@prisma/client';
const { hashPassword, comparePasswords } = require('../utils/hashPassword');

const prisma = new PrismaClient();

interface LoginRequestBody {
  email: string;
  password: string;
}


interface RegisterRequestBody {
  email: string;
  password: string;
}

const register = async (
  req: Request<{}, {}, RegisterRequestBody>,
  res: Response,
  next: NextFunction


) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return res.status(400).json({ message: 'Email already exists' });
      }
    }

    next(error);
  };
}

const login = async (


  req: Request<{}, {}, LoginRequestBody>,
  res: Response,
  next: NextFunction


) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await comparePasswords(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful' });
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return res.status(400).json({ message: 'Email already exists' });
      }
    }
  
    next(error);
  };
}
module.exports = {
  register, 
  login,
}