import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Olá mundo' });
});

app.listen(3000);