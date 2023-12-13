import { Router } from 'express';
import MatachesController from '../controllers/matches.controller';
import tokenVerify from '../middleware/tokenValidation';

const matchesRouter = Router();

matchesRouter
  .patch('/:id/finish', tokenVerify, MatachesController.updateMatchByStatus)
  .patch('/:id', tokenVerify, MatachesController.updateMatchById)
  .get('/', MatachesController.getAllMatches)
  .post('/', tokenVerify, MatachesController.createMatch);

export default matchesRouter;
