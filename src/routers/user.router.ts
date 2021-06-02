import { Router } from 'express';
import { users } from '../controllers/user.controller';

const userRouters = Router();

userRouters.get('/users/', users);

export default userRouters;