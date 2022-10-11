const express = require('express');
const app = express();
const crypto = require('crypto');

app.get('/', (req, res) => {
	res.status(200).json({
		message: 'This is root route',
	});
});

app.get('/random-hash', (req, res) => {
	const randomBytes = crypto.randomBytes(16);
	res.status(200).json({
		hash: crypto.createHash('sha256').update(randomBytes).digest('hex'),
		data: randomBytes.toString('hex'),
	});
});

app.listen(8000, () => {
	console.log('Meow meow meow');
});
