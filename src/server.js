require("dotenv").config();

// const morgan = require("morgan");

const express = require("express");
const healthRouter = require("./routes/health");
const usersRouter = require("./routes/users");
const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;

    console.log(
      `${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`,
    );
  });

  next();
});

app.use("/api", healthRouter);
app.use("/api/users", usersRouter);

app.get("/", (req, res) => {
  res.send("<h1>Refresh app running</h1>");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
