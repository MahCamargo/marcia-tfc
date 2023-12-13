import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validUser from '../middleware/userValidation';
import validLogin from '../middleware/loginValidation';

const userRouter = Router();

userRouter
  .post('/', validUser, validLogin, UserController.verifyLogin)
  .get('/role', UserController.getRole);

export default userRouter;
