import express from 'express';
import routes from './routers';

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
    return response.json('Server running !');
});

app.listen(3000);