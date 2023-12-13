import { NextFunction, Request, Response } from 'express';
import verifyToken from '../utils/authfunction';

const tokenVerify = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = authorization.split(' ')[1];

  const validate = verifyToken.getPayload(token as string);

  if (!validate) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  next();
};

export default tokenVerify;
