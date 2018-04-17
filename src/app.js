#!/usr/bin/env node
import config from './utils/config';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import initRoutes from './routes/__init__';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

initRoutes(app);

app.listen(config.server.port, config.server.host, () => {
	console.log(
		`MajorCoin started on ${config.server.host}:${config.server.port}`
	);
});
