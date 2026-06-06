require("dotenv").config();

// const morgan = require("morgan");

const express = require("express");
const healthRouter = require("./routes/health");

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api", healthRouter);

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  next();
});

// app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1>Refresh app running</h1>");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
