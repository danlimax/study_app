import "dotenv/config";
import express from "express";
import { rateLimit } from "express-rate-limit";
import routes from "./src/router/index.route";
import cors from "cors";

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 1000,
  message: "Limite de requisições atingido, aguarde 15 min e tente novamente.",
  standardHeaders: true,
  legacyHeaders: false,
});

const config = {
  origin: process.env.APP_URL,
  credentials: true, //Cookies e outras credenciais como cabeçalhos de autorização.
};

app.use(express.urlencoded({ limit: "10MB", extended: true })); //Analisa dados de formulários HTML que são codificados em URL (application/x-www-form-urlencoded).

app.use(express.json({ limit: "10MB" })); // Analisa (faz parsing) dados que chegam no formato JSON (texto puro no corpo da requisição).

app.use(cors(config));

app.use(limiter);

app.use(routes);

export default app;
