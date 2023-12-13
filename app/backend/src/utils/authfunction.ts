import * as jwt from 'jsonwebtoken';
import { SignOptions } from 'jsonwebtoken';

const secret: string = process.env.JWT_SECRET || 'secret';
const JWT_CONFIG: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

interface Payload {
  id: number;
  role: string;
  email: string;
  username: string;
}

const createToken = (payload: object) => jwt.sign(payload, secret, JWT_CONFIG);

const getPayload = (token: string): Payload | null => {
  try {
    const payload = jwt.verify(token, secret);

    return payload as Payload;
  } catch (error) {
    return null;
  }
};

export default { createToken, getPayload };
