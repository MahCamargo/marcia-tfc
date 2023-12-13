import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamsModel';

interface MatchesResponse {
  status: string;
  data: Matches[] | object;
}

interface CreateMatch {
  homeTeamId: string;
  homeTeamGoals: string;
  awayTeamId: string;
  awayTeamGoals: string;
}

export default class MatchesService {
  public static getAllMatches(): Promise<MatchesResponse> {
    return Matches.findAll({
      include: [
        { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
        { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
      ],
    }).then((matches) => ({ status: 'successful', data: matches }));
  }

  static getMatchesByStatus(status: string): Promise<MatchesResponse> {
    if (status !== 'true' && status !== 'false') {
      return Promise.resolve({ status: 'unprocessableEntity', data: { message: 'Invalid status' },
      });
    }
    return Matches.findAll({
      where: { inProgress: JSON.parse(status) },
      include: [
        { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
        { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
      ],
    }).then((matches) => ({ status: 'successful', data: matches }));
  }

  static updateMatchByStatus(id: string): Promise<MatchesResponse> {
    return Matches.findByPk(id).then((match) => {
      if (!match) {
        return { status: 'notFound', data: [] };
      }

      return Matches.update({ inProgress: false }, { where: { id } }).then(() => ({
        status: 'successful',
        data: { message: 'Finished' },
      }));
    });
  }

  static updateMatchById(
    id: string,
    homeTeamGoals?: string,
    awayTeamGoals?: string,
  ): Promise<MatchesResponse> {
    return Matches.findByPk(id).then((match) => {
      if (!match) {
        return { status: 'notFound', data: [] };
      }

      const toNumberHomeTeamGoals = Number(homeTeamGoals);
      const toNumberAwayTeamGoals = Number(awayTeamGoals);

      return Matches.update(
        { homeTeamGoals: toNumberHomeTeamGoals, awayTeamGoals: toNumberAwayTeamGoals },
        { where: { id } },
      ).then(() => ({ status: 'successful', data: { message: 'Updated Successfully' } }));
    });
  }

  static createMatch(createMatch: CreateMatch): Promise<MatchesResponse> {
    if (createMatch.homeTeamId === createMatch.awayTeamId) {
      return Promise.resolve({
        status: 'unprocessableEntity',
        data: { message: 'It is not possible to create a match with two equal teams' },
      });
    }

    return Teams.findByPk(createMatch.homeTeamId || createMatch.awayTeamId).then((homeTeam) => {
      if (!homeTeam) {
        return { status: 'notFound', data: { message: 'There is no team with such id!' } };
      }

      return Matches.create({
        homeTeamId: Number(createMatch.homeTeamId),
        homeTeamGoals: Number(createMatch.homeTeamGoals),
        awayTeamId: Number(createMatch.awayTeamId),
        awayTeamGoals: Number(createMatch.awayTeamGoals),
        inProgress: true,
      }).then((match) => ({ status: 'created', data: match }));
    });
  }
}
