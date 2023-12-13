import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import * as bcrypt from 'bcryptjs';

import { app } from '../app';
import UserModel from '../database/models/UserModel';
import mocksUser from './mocks/mocks.user';
import Token from '../utils/authfunction';

const { expect } = chai;

chai.use(chaiHttp);

describe('Testando rota POST/LOGIN', () => {
  afterEach(() => sinon.restore());
  
  it('Deve retornar status 400 e mensagem "Todos os campos devem ser preenchidos" sem e-mail', async () => {
    sinon.stub(UserModel, 'findOne').resolves(UserModel.build(mocksUser.userModel));
    sinon.stub(bcrypt, 'compare').resolves(true);
    const chaiHttpResponse = await chai.request(app).post('/login').send(mocksUser.userWithoutEmail);
    
    expect(chaiHttpResponse).to.have.status(400);
    expect(chaiHttpResponse.body).to.be.deep.equal(mocksUser.loginError);
  });
  
  it('Deve retornar status 200 e token', async () => {
    sinon.stub(UserModel, 'findOne').resolves(UserModel.build(mocksUser.userModel));
    sinon.stub(bcrypt, 'compare').resolves(true);
    
    const chaiHttpResponse = await chai.request(app).post('/login').send(mocksUser.validUser);
    
    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.have.property('token');
  });

  it('Deve retornar status 400 e mensagem "Todos os campos devem ser preenchidos" sem senha válida', async () => {
    sinon.stub(UserModel, 'findOne').resolves(UserModel.build(mocksUser.userModel));
    sinon.stub(bcrypt, 'compare').resolves(false);
    const chaiHttpResponse = await chai.request(app).post('/login').send(mocksUser.userWithPasswordInvaldid);
  
    expect(chaiHttpResponse).to.have.status(401);
    expect(chaiHttpResponse.body).to.be.deep.equal(mocksUser.loginError2);
  });

  it('Deve retornar status 400 e mensagem "Todos os campos devem ser preenchidos" sem senha', async () => {
    sinon.stub(UserModel, 'findOne').resolves(UserModel.build(mocksUser.userModel));
    sinon.stub(bcrypt, 'compare').resolves(true);
    const chaiHttpResponse = await chai.request(app).post('/login').send(mocksUser.userWithoutPassword);

    expect(chaiHttpResponse).to.have.status(400);
    expect(chaiHttpResponse.body).to.be.deep.equal(mocksUser.loginError);
  });


  it('Deve retornar status 401 e mensagem "E-mail ou senha inválidos"', async () => {
    sinon.stub(UserModel, 'findOne').resolves(null);
    sinon.stub(bcrypt, 'compare').resolves(true);
    const chaiHttpResponse = await chai.request(app).post('/login').send(mocksUser.invalidUser);

    expect(chaiHttpResponse).to.have.status(401);
    expect(chaiHttpResponse.body).to.be.deep.equal(mocksUser.loginError2);
  });

  it('Deve retornar status 401 e mensagem "O token deve ser um token válido"', async () => {
    sinon.stub(Token, 'getPayload').returns(null);
    const chaiHttpResponse = await chai.request(app).get('/login/role').set('authorization', `Bearer ${mocksUser.loginSuccessful.token}`);

    expect(chaiHttpResponse).to.have.status(401);
    expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'O token deve ser um token válido' });
  });

  it('Deve retornar status 401 e mensagem "E-mail ou senha inválidos"', async () => {
    sinon.stub(UserModel, 'findOne').resolves(UserModel.build(mocksUser.userModel));
    sinon.stub(bcrypt, 'compare').resolves(false);
    const chaiHttpResponse = await chai.request(app).post('/login').send(mocksUser.invalidUserWhitPasswordLength);

    expect(chaiHttpResponse).to.have.status(401);
    expect(chaiHttpResponse.body).to.be.deep.equal(mocksUser.loginError2);
  });

  it('Deve retornar status 200 e mensagem "Executando na porta 3001"', async () => {
    const chaiHttpResponse = await chai.request(app).get('/');

    expect(chaiHttpResponse).to.have.status(200);
  });
  
  it('Deve retornar função admin', async () => {
    sinon.stub(Token, 'getPayload').returns(mocksUser.payload);
    const chaiHttpResponse = await chai.request(app).get('/login/role').set('authorization', `Bearer ${mocksUser.loginSuccessful.token}`);

    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.deep.equal({ role: 'admin' });
  });

  it('Deve retornar status 401 e mensagem "Token não encontrado"', async () => {
    const chaiHttpResponse = await chai.request(app).get('/login/role');

    expect(chaiHttpResponse).to.have.status(401);
    expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Token não encontrado' });
  });

});

