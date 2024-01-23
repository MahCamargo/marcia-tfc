import { Request, Response } from 'express';
import UserService from '../services/user.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
  static verifyLogin(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    return UserService.verifyLogin(email, password).then(({ status, data }) =>
      res.status(mapStatusHTTP(status)).json(data));
  }

  static getRole(req: Request, res: Response): Promise<Response> {
    const { authorization } = req.headers;

    if (authorization) {
      return UserService.getRole(authorization).then(({ status, data }) =>
        res.status(mapStatusHTTP(status)).json(data));
    }

    return Promise.resolve(
      res.status(401).json({ message: 'Token not found' }),
    );
  }
}
