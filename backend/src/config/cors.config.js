const corsOptions = {
  origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  Credential: true,
  allowedHeaders: ['content-type', 'Authorization'],
};

export { corsOptions };