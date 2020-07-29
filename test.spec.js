const { expect } = require('chai');
const app = require('supertest')(require('./app'));
const path = require('path');
const { resize } = require('./utils');

describe('gm', ()=> {
  it('exists', (done)=> {
    resize(path.join(__dirname, 'olive.jpg'),path.join(__dirname, 'olive.thumb.jpg'))
    .then( done );
  });
});

describe('app', ()=> {
  it('returns a resized image', async()=> {
    const response = await app.get('/');
    expect(response.status).to.equal(200);
  });
});
