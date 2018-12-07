'use strict';
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const https = require('https');
const http = require('http');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const db = require('./modules/database');
const resize = require('./modules/resize');
//const exif = require('./modules/exif');

const bodyParser = require('body-parser');

const multer = require('multer');
const upload = multer({dest: 'public/uploads/'});

const app = express();

app.use(bodyParser.urlencoded({encoded: true}));
app.use(bodyParser.json());

const connection = db.connect();

const cb = (result, res) => {
	console.log(result);
	res.send(result);
};

app.use(express.static('public'));

app.post('/upload', upload.single('mediafile'), (req, res, next) => {
  console.log("/upload happens now");
  console.log("req.query", req.query);
	next();
});

app.use('/upload', (req, res, next) => {
	resize.doResize(req.file.path, 300,
		'public/thumbnails/' + req.file.filename + '_thumb').then(() => {
		next();
	});
});

app.use('/upload', (req, res, next) => {
	resize.doResize(req.file.path, 640,
		'public/medium/' + req.file.filename + '_medium').then(() => {
		next();
	});
});

app.use('/upload', (req, res, next) => {
  console.log(req.body);
	const data = [
		//req.body.rID,
		req.body.UserID,
		req.body.Name,
    req.body.Ingredients,
    req.file.filename,
		req.file.filename + '_thumb',
		req.file.filename + '_medium',
    req.body.PreparationTime

		];
	db.insert(data, connection, next);
});

app.use('/upload', (req, res) => {
	db.select(connection, cb, res);
});

app.get('/images', (req, res) => {
	db.select(connection, cb, res);
});

app.patch('/images', (req, res) => {
	const data = [
		req.body.category,
		req.body.title,
		req.body.details,
		req.body.mID,
		];
	db.update(data,connection).then((result) => {
	}).catch((err) => {
		console.log(err);
	});
});

app.delete('/images', (req, res) => {
	const item = [req.body.mID];
	db.deleteImage(item, connection);
});

app.get('/search', (req, res) => {
	db.searchTitle([req.query.title], connection).then((result) => {
		res.send(result);
	}).catch((err) => {
		console.log(err);
	});
});

const sslkey = fs.readFileSync('/etc/pki/tls/private/ca.key');
const sslcert = fs.readFileSync('/etc/pki/tls/certs/ca.crt');

const options = {
	key: sslkey,
	cert: sslcert
};

//app.listen(8000);
http.createServer((req, res) => {
	res.writeHead(301, { 'Location': 'https://' + req.headers.host + '/nodekek' + req.url });
		res.end();
		}).listen(8000);
    console.log("listening port: 3000");
		https.createServer(options, app).listen(3000);
		
