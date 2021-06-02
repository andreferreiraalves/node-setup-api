import express from 'express';
import userRouters from './routers/user.router';

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(userRouters);

app.get('/', (request, response) => {
    return response.json(`server is running ${PORT}`);
});

console.log(`server is running ${PORT}`)

app.listen(PORT);