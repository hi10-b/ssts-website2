import { sql_fetchAllEvents, sql_fetchTodayEvents } from '../sql_queries';

// const router = require('express').Router();

// router.route('/').get((req, res) => {
// 	Event.query('SELECT * FROM event;', (err, result) => {
// 		if (err) throw err;
// 		res.send(result);
// 		console.log('results ' + result);
// 	});
// });

// router.route('/today').get((req, res) => {
// 	Event.query
// })

// const fs = require('fs');
// const path = require('path');
// const express = require('express');
// const { eventFilePath } = require('../config');

// const externalImagePath = '/images/events/';
// const externalImagePathRegex = '^/images/events/';

// router.get('/', function (req, res, next) {
// 	const allEvents = [];

// 	fs.readdir(eventFilePath, function (err, files) {
// 		console.log(files);
// 		if (err) console.log(err);
// 		files.forEach((file) => {
// 			const eventJson = JSON.parse(fs.readFileSync(`${eventFilePath}/${file}`, 'utf8'));
// 			eventJson.filename = file;
// 			allEvents.push(eventJson);
// 		});
// 		console.log('Got all events:');
// 		console.log(allEvents);
// 		res.json(allEvents);
// 	});
// });
