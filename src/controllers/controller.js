import { validationResult } from 'express-validator';
import Book from '../models/book.js';

let booksList = [];

function index(req, res, next) {
	/* 
		#swagger.tags = ['Books']
		#swagger.summary = 'List all books'
		#swagger.description = 'This endpoint returns a list containing all saved books.'
		#swagger.responses[200] = {
      schema: { "$ref": "#/definitions/listBooks" },
      description: "Successfully found book." }
		}
	*/
  res.json(booksList);
};

function store(req, res, next) {
	/* 
		#swagger.tags = ['Books']
		#swagger.summary = 'Save a new book'
		#swagger.description = 'Saves a new book in the system and returns the same with all the data.'

		#swagger.parameters['obj'] = {
			in: 'body',
			description: 'Book information.',
			required: true,
			schema: { $ref: "#/definitions/Book" }
		}
		
		#swagger.responses[201] = {
      schema: { "$ref": "#/definitions/SavedBook" },
      description: "Book saved successfully." }
		}
	*/

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
	/*
		#swagger.tags = ['Books']
		#swagger.summary = 'Show a specific book'
		#swagger.description = 'Shows a specific book based on its Id.'

		#swagger.parameters['id'] = { 
			required: true, 
			description: 'This is the Book Id, which is your unique identification in the system'
		}
		
		#swagger.responses[404] = { description: 'If the given Id does not exist, we return 404' }
		#swagger.responses[200] = {
      schema: { "$ref": "#/definitions/Book" },
      description: "Successfully found book." }
		}
	*/

	const book = booksList.find(element => element.id === req.params['id']);

	if (book === undefined) return res.status(404).end();

	res.status(200);
	res.send(book);
}

function remove(req, res, next) {
	/*
		#swagger.tags = ['Books']
		#swagger.summary = 'Delete a specific book'
		#swagger.description = 'Delete a specific book based on id.'

		#swagger.parameters['id'] = { 
			required: true, 
			description: 'This is the Book Id, which is your unique identification in the system'
		}
		
		#swagger.responses[404] = { description: 'If the given Id does not exist, we return 404' }
		#swagger.responses[200] = {
      description: "Successfully deleted." }
		}
	*/

	const book = booksList.find(element => element.id === req.params['id']);
	if (book === undefined) return res.status(404).end();

	booksList = booksList.filter(element => element.id !== req.params['id']);
	res.status(200).end();
}


export default { index, store, view, remove };


