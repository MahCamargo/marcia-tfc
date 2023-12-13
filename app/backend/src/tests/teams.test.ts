import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import mocksTeams from './mocks/mocks.teams';
import TeamsModel from '../database/models/TeamsModel';

const { expect } = chai;

chai.use(chaiHttp);

describe('Seu teste', () => {
  afterEach(() => sinon.restore());

  it('Deve retornar todos os Times', async () => {
    sinon.stub(TeamsModel, 'findAll').resolves(TeamsModel.bulkBuild(mocksTeams.mockAllTeams));
    const chaiHttpResponse = await chai.request(app).get('/teams');

    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(mocksTeams.mockAllTeams);
    expect(chaiHttpResponse.body).to.be.an('array');
  });

  it('Deve retornar que o Time não foi encontrado', async () => {
    sinon.stub(TeamsModel, 'findByPk').resolves(null);
    const chaiHttpResponse = await chai.request(app).get('/teams/1454');

    expect(chaiHttpResponse).to.have.status(404);
    expect(chaiHttpResponse.body).to.be.deep.equal([]);
    expect(chaiHttpResponse.body).to.be.an('array');
  });
  it('Deve retornar um Time pelo ID', async () => {
    sinon.stub(TeamsModel, 'findByPk').resolves(TeamsModel.build(mocksTeams.mockTeamById));
    const chaiHttpResponse = await chai.request(app).get('/teams/1');

    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(mocksTeams.mockTeamById);
    expect(chaiHttpResponse.body).to.be.an('object');
  });

});

