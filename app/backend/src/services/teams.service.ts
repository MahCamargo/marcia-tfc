import Teams from '../database/models/TeamsModel';

interface GetAllTeamsResponse {
  status: string;
  data: Teams[];
}

interface GetTeamByIdResponse {
  status: string;
  data: Teams | [];
}

export default class TeamsService {
  static getAllTeams = async (): Promise<GetAllTeamsResponse> => {
    try {
      const teams = await Teams.findAll();
      return { status: 'successful', data: teams };
    } catch (error) {
      return { status: 'error', data: [] };
    }
  };

  static getTeamById = async (id: number): Promise<GetTeamByIdResponse> => {
    try {
      const team = await Teams.findByPk(id);
      if (!team) return { status: 'notFound', data: [] };
      return { status: 'successful', data: team };
    } catch (error) {
      return { status: 'error', data: [] };
    }
  };
}
