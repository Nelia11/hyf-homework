const express = require("express");
const router = require("./routes");

const port = process.env.PORT || 3000;

const app = express();

// Support parsing JSON requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.json("This is a search engine");
});

app.use("", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});