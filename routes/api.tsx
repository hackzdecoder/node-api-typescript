import express, { Request, Response } from "express";

const router = express.Router();

router.get("/test", (request: Request, response: Response) => {
    response.json({ message: "API route is working!" });
});

export default router;
