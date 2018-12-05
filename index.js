'use strict';
require('dotenv').config();
const express = require('express');
const db = require('./modules/database');
const resize = require('./modules/resize');

const bodyParser = require('body-parser');

const multer = require('multer');
const upload = multer({dest: 'public/uploads/'});

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const connection = db.connect();

const cb = (result, res) => {
  console.log(result);
  res.send(result);
};

app.use(express.static('public'));


app.use('/conDb', (req,res) => {
  console.log("COnnecting");


});
// respond to post and save file
app.post('/upload', upload.single('mediafile'), (req, res, next) => {
  next();
});

// create thumbnail
app.use('/upload', (req, res, next) => {
  resize.doResize(req.file.path, 300,
      './public/thumbnails/' + req.file.filename + '_thumb').then(() => {
    next();
  });
});

// create medium image
app.use('/upload', (req, res, next) => {
  resize.doResize(req.file.path, 640,
      './public/medium/' + req.file.filename + '_medium').then(() => {
    next();
  });
});

/*
// insert to database
app.use('/upload', (req, res, next) => {
  const data = [
    req.body.category,
    req.body.title,
    req.body.details,
    req.file.filename + '_thumb',
    req.file.filename + '_medium',
    req.file.filename
  ];
  db.insert(data, connection, next);
});
*/
// get updated data form database and send to client
app.use('/upload', (req, res) => {
  db.select(connection, cb, res);


});

app.get('/images', (req, res) => {
  db.select(connection, cb, res);

});
/*
app.patch('/images', (req, res) => {
  const data = [
    req.body.category,
    req.body.title,
    req.body.details,
    req.body.mID,
  ];
  db.update(data, connection).then((result) => {
  }).catch((err) => {
    console.log(err);
  });
});
*/
/*
app.delete('/images', (req, res) => {
  const item = [req.body.mID];
  db.deleteImage(item, connection);
});
*/
app.get('/search', (req, res) => {
  db.searchTitle([req.query.title], connection).then((result) => {
    res.send(result);
  }).catch((err) => {
    console.log(err);
  });
});

app.listen(3000);

// *********************
// esimerkkejä:
/*
app.get('/', (req, res) => {
  console.log(req.ip);
  console.log(req.query.myParam);
  res.send('ok 1');
});

app.get('/path1/:param1', (req, res) => {
  console.log(req.params.param1);
  res.send('ok 2');
});

app.get(['/path2', '/path3', '/path4'], (req, res) => {
  console.log(req);
  res.send('ok 3');
});

app.use('/json', (req, res, next) => {
  console.log('Middleware tässä');
  next();
});

app.get('/json', (req, res) => {
  const objekti = {
    id: 1,
    name: 'My response',
  };
  res.send(objekti);
});
*/