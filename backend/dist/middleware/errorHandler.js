"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Request, Response, NextFunction } = require('express');
const errorHandler = (err, req, res, next) => {
    console.error(err); // Log the error (for development)
    //  Customize error responses based on the error type if needed
    res.status(500).json({ message: 'Something went wrong' });
};
exports.default = errorHandler;
