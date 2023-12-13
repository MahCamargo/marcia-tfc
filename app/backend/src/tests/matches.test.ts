import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import MatchesModel from '../database/models/MatchesModel';
import mocksMatches from './mocks/mocks.matches';
import Teams from '../database/models/TeamsModel';
import Token from '../utils/authfunction';
import mocksTeams from './mocks/mocks.teams';

const { expect } = chai;

chai.use(chaiHttp);

describe('Testando rota de Partidas', () => {
  afterEach(() => sinon.restore());

  it('Deve retornar atualização de Partidas não em andamento', async () => {
    const chaiHttpResponse = await chai.request(app).get('/matches?inProgress=queryNotValid');
    
    expect(chaiHttpResponse).to.have.status(422);
    expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Invalid status' });
  });

  it('Deve retornar todas as Partidas', async () => {
    sinon.stub(MatchesModel, 'findAll').resolves(MatchesModel.bulkBuild(mocksMatches.allMatches));
    const chaiHttpResponse = await chai.request(app).get('/matches');    
    
    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(mocksMatches.allMatches);
  });

  it('Deve retornar atualização de Partidas em andamento', async () => {
    sinon.stub(MatchesModel, 'findAll').resolves(MatchesModel.bulkBuild(mocksMatches.matchesInProgress));
    const chaiHttpResponse = await chai.request(app).get('/matches?inProgress=true');

    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(mocksMatches.matchesInProgress);
  });
  
  it('Deve atualizar uma Partida por ID', async () => {
    sinon.stub(MatchesModel, 'findByPk').resolves(MatchesModel.build(mocksMatches.mockMatchById));
    sinon.stub(MatchesModel, 'update').resolves([1] as any);
    const validToken = Token.createToken(mocksMatches.payload);
    
    const chaiHttpResponse = await chai.request(app).patch('/matches/1/finish')
    .set('Authorization', `Bearer ${validToken}`);
    
    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Finished' });
  });

  it('Não deve atualizar uma Partida por ID, se o ID não existir', async () => {
    sinon.stub(MatchesModel, 'findByPk').resolves(null);
    const validToken = Token.createToken(mocksMatches.payload);
    
    const chaiHttpResponse = await chai.request(app).patch('/matches/1/finish')
      .set('Authorization', `Bearer ${validToken}`);
    
    expect(chaiHttpResponse).to.have.status(404);
    expect(chaiHttpResponse.body).to.be.deep.equal([]);
  });

  it('Deve retornar atualização por ID não encontrado', async () => {
    sinon.stub(MatchesModel, 'findByPk').resolves(null);
    sinon.stub(MatchesModel, 'update').resolves([0] as any);
    const validToken = Token.createToken(mocksMatches.payload);
    
    const chaiHttpResponse = await chai.request(app).patch('/matches/1')
      .set('Authorization', `Bearer ${validToken}`);
    
    expect(chaiHttpResponse).to.have.status(404);
    expect(chaiHttpResponse.body).to.be.deep.equal([]);
  });

  it('Deve retornar atualização por ID encontrado', async () => {
    sinon.stub(MatchesModel, 'findByPk').resolves(MatchesModel.build(mocksMatches.mockMatchById));
    sinon.stub(MatchesModel, 'update').resolves([1] as any);
    const validToken = Token.createToken(mocksMatches.payload);
    
    const chaiHttpResponse = await chai.request(app).patch('/matches/1')
      .set('Authorization', `Bearer ${validToken}`);
    
    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Updated Successfully' });
  });


  it('Deve retornar unprocessableEntity com IDs inexistentes', async () => {
    sinon.stub(MatchesModel, 'findByPk').resolves(null);
    const validToken = Token.createToken(mocksMatches.payload);
    
    const chaiHttpResponse = await chai.request(app).post('/matches')
    .set('Authorization', `Bearer ${validToken}`)
    .send(mocksMatches.mockMatchCreateErrorId);
    
    expect(chaiHttpResponse).to.have.status(404);
    expect(chaiHttpResponse.body).to.be.deep.equal(mocksMatches.mockMatchCreateErrorIdMessage);
  });

  it('Deve criar uma Partida', async () => {
    sinon.stub(MatchesModel, 'findByPk').resolves(Teams.build(mocksTeams.mockTeamById));
    sinon.stub(MatchesModel, 'create').resolves(MatchesModel.build(mocksMatches.mockMatchById));
    const validToken = Token.createToken(mocksMatches.payload);
    
    const chaiHttpResponse = await chai.request(app).post('/matches')
      .set('Authorization', `Bearer ${validToken}`)
      .send(mocksMatches.mockMatchCreate);
    
    expect(chaiHttpResponse).to.have.status(201);
    expect(chaiHttpResponse.body).to.be.deep.equal(mocksMatches.mockMatchById);
  });

  it('Deve retornar unprocessableEntity com IDs iguais', async () => {
    const validToken = Token.createToken(mocksMatches.payload);
    
    const chaiHttpResponse = await chai.request(app).post('/matches')
      .set('Authorization', `Bearer ${validToken}`)
      .send(mocksMatches.mockMatchCreateError);
    
    expect(chaiHttpResponse).to.have.status(422);
    expect(chaiHttpResponse.body).to.be.deep.equal(mocksMatches.mockMatchCreateErrorMessage);
  });
});
