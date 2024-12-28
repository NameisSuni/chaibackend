require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Welcome to Twitter!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Welcome to Login Page</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Goodbye! See you later.</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
