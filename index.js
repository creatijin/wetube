
const express = require('express');
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://Localhost:${PORT}`)
}

function handleHome(req, res) {
  console.log("Hi from Home!!");
}

function handleProfile(req, res) {
  console.log("You are on my profile")
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);