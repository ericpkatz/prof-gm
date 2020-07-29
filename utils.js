const gm = require('gm');
const path = require('path');

const resize = (source, target)=> {
  return new Promise((resolve, reject)=> {
    gm(source)
      .resize(null, 100)
      .write(target, (err)=> {
        if(err){
          return reject(err);
        }
        resolve(err);
      });
  });
}

module.exports = {
  resize
}
