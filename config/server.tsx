import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { paths } from "../dirMapping";

dotenv.config();

async function serverConfig() {
  const endPoint = await import(`${paths.routes}/api.tsx`);

  const app = express();
  const port = process.env.PORT || 5000;

  app.use(cors());
  app.use(express.json());
  app.use("/api", endPoint.default);

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

serverConfig();
