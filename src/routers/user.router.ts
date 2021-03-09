import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (request, response) => {
    return response.json('ok');
});

export default userRouter;