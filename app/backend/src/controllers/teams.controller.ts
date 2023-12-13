import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class TeamsController {
  static getAllTeams(req: Request, res: Response): Promise<Response> {
    return TeamsService.getAllTeams()
      .then(({ status, data }) => res.status(mapStatusHTTP(status)).json(data));
  }

  static getTeamById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    return TeamsService.getTeamById(Number(id))
      .then(({ status, data }) => res.status(mapStatusHTTP(status)).json(data));
  }
}
