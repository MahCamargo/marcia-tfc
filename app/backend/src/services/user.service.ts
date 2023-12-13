import { compare } from 'bcryptjs';
import User from '../database/models/UserModel';
import Token from '../utils/authfunction';

interface VerifyLoginResponse {
  status: string;
  data: string | object;
}

export default class UserService {
  public static verifyLogin = async (
    email: string,
    password: string,
  ): Promise<VerifyLoginResponse> => {
    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return { status: 'unauthorized', data: { message: 'Invalid email or password' } };
      }

      const isPasswordValid = await compare(password, user.password);

      if (!isPasswordValid) {
        return { status: 'unauthorized', data: { message: 'Invalid email or password' } };
      }

      const { password: _, ...userWithoutPassword } = user.dataValues;

      const token = Token.createToken(userWithoutPassword);

      return { status: 'successful', data: { token } };
    } catch (error) {
      return { status: 'error', data: { message: 'An error occurred during login verification' } };
    }
  };

  static getRole = async (authorization: string): Promise<VerifyLoginResponse> => {
    try {
      const token = authorization.split(' ')[1];
      const isValidToken = Token.getPayload(token);

      if (!isValidToken) {
        return { status: 'unauthorized', data: { message: 'Token must be a valid token' } };
      }

      const { role } = isValidToken;

      return { status: 'successful', data: { role } };
    } catch (error) {
      return { status: 'error', data: { message: 'An error occurred during role retrieval' } };
    }
  };
}
