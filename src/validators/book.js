import { body } from 'express-validator';

export default () => {
	return [
		body('name').exists().withMessage('Name is required')
			.isString().withMessage('Name must be string'),

		body('pages').exists().withMessage('Pages is required')
			.isInt().withMessage('Pages must be a number'),

		body('year', 'Invalid year').exists().withMessage('Year is required')
			.isInt().withMessage('Year must be a number'),

		body('isbn', 'Invalid isbn').exists().withMessage('ISBN is required')
			.isString().withMessage('ISBN must be a string'),
	];
};