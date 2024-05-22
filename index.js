import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const app = express();
const server = createServer(app);

const __dirname = dirname(fileURLToPath())


app.get('/', (request, response) => {
    response.send('<h1>Hello world!</h1>');
});


server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});


