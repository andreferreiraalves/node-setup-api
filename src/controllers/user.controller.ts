import { Request, Response } from "express";

export const users = async (req: Request, res: Response) => {
    res.status(400).send('error').end();
    return;
}

