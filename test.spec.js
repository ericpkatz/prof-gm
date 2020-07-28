const { expect } = require('chai');
const gm = require('gm');
const path = require('path');

describe('gm', ()=> {
  it('exists', (done)=> {
    gm(path.join(__dirname, 'olive.jpg'))
      .resize(null, 100)
      .write(path.join(__dirname, 'olive.thumb.jpg'), (err)=> {
        done(err);
      });
  });
});
