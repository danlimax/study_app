import express from "express";
import routes from "./src/router/index.route";
import cors from "cors";

const app = express();

const config = {
  origin: "http://localhost:5173", // The exact origin of the client
  credentials: true, // Allows the Access-Control-Allow-Credentials header to be true
};

app.use(express.urlencoded({ limit: "10MB", extended: true }));

app.use(express.json({ limit: "10MB" }));

app.use(cors(config));

app.get("/", (req, res) => {
  return res.status(200).json("Jason de teste");
});

app.use(routes);

export default app;
