import { Router } from 'express';
import TeamController from '../controllers/teams.controller';

const teamRouter = Router();

teamRouter
  .get('/', TeamController.getAllTeams)
  .get('/:id', TeamController.getTeamById);

export default teamRouter;
