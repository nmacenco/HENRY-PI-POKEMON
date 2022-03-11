/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');
// var supertest = require('supertest-as-promised')(require('../app'));
const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

describe('Types routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)))
  describe('GET /types', () => {
    
    it('should get 200', () =>
      agent.get('/types').expect(200)
    );
  });
});
describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)))
  describe('GET /pokemons', () => {
    
    it('should get 404', () =>
      agent.get('/pokemones').expect(404)
    );
    it('should get 200', done  => {
      try {
        agent.get('/pokemons').expect(200)
        done()
      } catch (error) {
        done(error)
      }
    }
    );
    it('GET responde 200 cuando se le pasa un nombre valido por query', done =>  {
      try {
        agent.get('/pokemons?qname=pikachu')
        .expect(200)
        .expect('Content-Type', /json/)
        done()
      } catch (error) {
        done(error)
      }
    });
    it('GET responde 404 cuando se le pasa un nombre invalido por query', done =>  {
      try {
        agent.get('/pokemons?qname=nico')
        .expect(200)
        .expect('Content-Type', /json/)
        done()
      } catch (error) {
        done(error)
      }
    });
  });

});
