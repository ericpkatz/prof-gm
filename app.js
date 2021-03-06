const express = require('express'); 
const { resize } = require('./utils');
const path = require('path');

const app = express();

module.exports = app;

app.get('/', async(req, res, next)=> {
  try {
    const source = path.join(__dirname, 'olive.jpg');
    const target = path.join(__dirname, 'olive.thumb.jpg');
    await resize(source, target);
    res.sendFile(target);
  }
  catch(ex){
    next(ex);
  }
}); 

app.use((err, req, res, next)=> {
  console.log(err);
  res.status(500).send(err.message);
});


