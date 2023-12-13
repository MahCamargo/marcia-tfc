import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import TeamsModel from '../database/models/TeamsModel';
import mocksLeaderBoard from './mocks/mocks.leaderBoard';
import mocksLeaderBoardAway from './mocks/mocks.leaderBoardAway';
import Matches from '../database/models/MatchesModel';

const { expect } = chai;

chai.use(chaiHttp);

describe('Testando rota do Quadro de Líderes', () => {
  afterEach(() => sinon.restore());
  it('Deve retornar Quadro de Líderes para time visitante', async () => {
    sinon.stub(TeamsModel, 'findAll').resolves(TeamsModel.bulkBuild(mocksLeaderBoardAway.mocksLeaderBoardAway, { include: [{ model: Matches, as: 'awayTeam' }] }));
    const chaiHttpResponse = await chai.request(app).get('/leaderboard/away');

    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(mocksLeaderBoardAway.leaderBoardAwayReturn);
    expect(chaiHttpResponse.body).to.be.an('array');
  });
  
  it('Deve retornar Quadro de Líderes para time da casa', async () => {
    sinon.stub(TeamsModel, 'findAll').resolves(TeamsModel.bulkBuild(mocksLeaderBoard.leaderBoardHome, { include: [{ model: Matches, as: 'homeTeam' }] }));
    const chaiHttpResponse = await chai.request(app).get('/leaderboard/home');

    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(mocksLeaderBoard.leaderBoardReturns);
    expect(chaiHttpResponse.body).to.be.an('array');
  });


});

