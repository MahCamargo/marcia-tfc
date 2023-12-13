import { NextFunction, Request, Response } from 'express';

const validLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validEmail = emailRegex.test(email);
  const validPassword = password.length >= 6;
  if (!validEmail || !validPassword) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
};

export default validLogin;
