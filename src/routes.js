import express from 'express';
import controller from './controllers/controller.js';
import validate from './validators/book.js';
import { body } from 'express-validator';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        title: "Simple Books API",
        version: "1.0.0"
    });
});

router.get('/healt-check', (req, res) => {
    res.status(200);
    res.send('Application working!');
});

router.get('/books', controller.index);
router.post('/book', validate('book'), controller.store);
router.get('/book/:id', controller.view);
router.delete('/book/:id', controller.remove);


export default router;