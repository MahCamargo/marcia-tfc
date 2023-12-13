import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatchesController {
  static getAllMatches(req: Request, res: Response): Promise<Response> {
    const { inProgress } = req.query;

    if (inProgress) {
      return MatchesService.getMatchesByStatus(inProgress as string)
        .then(({ status, data }) => res.status(mapStatusHTTP(status)).json(data));
    }

    return MatchesService.getAllMatches()
      .then(({ status, data }) => res.status(mapStatusHTTP(status)).json(data));
  }

  static updateMatchByStatus(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    return MatchesService.updateMatchByStatus(id)
      .then(({ status, data }) => res.status(mapStatusHTTP(status)).json(data));
  }

  static updateMatchById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    return MatchesService.updateMatchById(id, homeTeamGoals, awayTeamGoals)
      .then(({ status, data }) => res.status(mapStatusHTTP(status)).json(data));
  }

  static createMatch(req: Request, res: Response): Promise<Response> {
    return MatchesService.createMatch(req.body)
      .then(({ status, data }) => res.status(mapStatusHTTP(status)).json(data));
  }
}
