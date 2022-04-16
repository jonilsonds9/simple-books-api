import { validationResult } from 'express-validator';
import Book from '../models/book.js';

let booksList = [];

function index(req, res, next) {
    res.json(booksList);
};

function store(req, res, next) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const book = new Book(req.body);
	booksList.push(book);

	res.status(201);
	res.send(book);
};

function view(req, res, next) {
	const book = booksList.find(element => element.id === req.params['id']);

	if (book === undefined) return res.status(404).end();

	res.status(200);
	res.send(book);
}

function remove(req, res, next) {
	const book = booksList.find(element => element.id === req.params['id']);
	if (book === undefined) return res.status(404).end();

	booksList = booksList.filter(element => element.id !== req.params['id']);
	res.status(200).end();
}


export default { index, store, view, remove };


