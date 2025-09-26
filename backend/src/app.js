import express from "express";
import cors from "cors";
import { corsOptions } from "./config/cors.config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

import healthCheckRoute from './routes/healthcheck.route.js';
app.use('/api/v1/healthcheck', healthCheckRoute);

export default app;
