const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors({ origin: true, credentials: true }));

app.use(express.json());
app.use(parser.urlencoded({ extended: true }));

const db = mysql.createPool({
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: 'Password01!',
	database: 'ssts',
});

// const eventsRouter = require('./routes/eventsRoute');

// app.use('./events', eventsRouter);

const todayDate = new Date() / 1000;

const sql_fetchAllEvents = 'SELECT * FROM event;';
const sql_fetchTodayEvents = `SELECT * FROM event WHERE startDate = ${1530938992000} ; `;

app.get('/', (req, res) => {
	db.query(sql_fetchAllEvents, (err, result) => {
		if (err) throw err;
		res.send(result);
		console.log('results ' + result);
	});
});

app.get('/today', (req, res) => {
	db.query(sql_fetchTodayEvents, (err, result) => {
		if (err) throw err;
		res.send(result);
		console.log(result);
	});
});

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.listen(port, () => {
	console.log(`Server running on port ${port}!`);
});
