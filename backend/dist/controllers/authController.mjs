"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { Request, Response, NextFunction } = require('express');
const { PrismaClient } = require('@prisma/client');
const { comparePasswords } = require('../utils/hashPassword');
const prisma = new PrismaClient();
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield prisma.user.findUnique({ where: { email } });
        if (!user || !(yield comparePasswords(password, user.password))) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        // Send success response
        res.json({ message: 'Login successful' });
    }
    catch (error) {
        next(error); // Pass error to Express error handler
    }
});
// Export using CommonJS syntax
module.exports = { login };
export {};
