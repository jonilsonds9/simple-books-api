import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import routes from './src/routes.js';
import { readFile } from 'fs/promises';
// import swaggerFile from './docs/swagger.json' assert { type: 'json' };


// const swaggerFile = require('./docs/swagger.json')

const swaggerFile = JSON.parse(
  await readFile('./docs/swagger.json')
);

const app = express()

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});