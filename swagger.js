import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Simple Book API',
    description: 'This application makes a basic crud of books in memory and is documented using swagger',
  },
  host: 'simple-books-api-express.herokuapp.com',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  definitions: {
    Book: {
        name: 'Book Name',
        pages: 200,
        year: 2022,
        isbn: '0000X'
    },
    SavedBook: {
      id: '18983a52-beae-40f0-9b79-5cf958d3a049',
      name: 'Book Name',
      pages: 200,
      year: 2022,
      isbn: '0000X'
    },
    listBooks: [
      { $ref: '#/definitions/Book' }
    ]
  }
};

const outputFile = './docs/swagger.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc).then(async () => {
  await import('./index.js');
});