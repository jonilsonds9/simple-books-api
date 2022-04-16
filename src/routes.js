import express from 'express';
import controller from './controllers/controller.js';
import validate from './validators/book.js';
import { body } from 'express-validator';

const router = express.Router();

router.get('/', (req, res) => {
	// #swagger.tags = ['Home']
	// #swagger.summary = 'Initial API endpoint'
	// #swagger.description = 'This is just the initial API endpoint.'

	res.status(200).send({
			title: "Simple Books API",
			version: "1.0.0"
	});
});

router.get('/books', controller.index);
router.post('/book', validate('book'), controller.store);
router.get('/book/:id', controller.view);
router.delete('/book/:id', controller.remove);


export default router;