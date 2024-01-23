import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderBoard.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class LeaderBoardController {
  static getLeaderBoard(req: Request, res: Response): Promise<Response> {
    const param = req.path.split('/')[1];
    return LeaderBoardService.getAllLeaderBoardHomeOrAway(param).then(
      ({ status, data }) => res.status(mapStatusHTTP(status)).json(data),
    );
  }
}
