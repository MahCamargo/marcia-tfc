import { NextFunction, Request, Response } from 'express';

const login = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valid = emailRegex.test(email);
  const senha = password.length >= 6;
  if (!valid || !senha) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
};

export default login;
