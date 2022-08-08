const express = require("express");
const app = express();
const authors = require("../authors.json");

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const author = authors.find((author) => author.id === Number(id));

  if (author) {
    res.json(`${author.name}, ${author.nationality}`);
  } else {
    res.status(404).send("Not found");
  }
});

app.get("/:id/books", (req, res) => {
  const { id } = req.params;
  const author = authors.find((author) => author.id === Number(id));

  if (author) {
    res.json(author.books.join(", "));
  } else {
    res.status(404).send("Not found");
  }
});

app.get("/json/:id", (req, res) => {
  const { id } = req.params;
  const author = authors.find((author) => author.id === Number(id));

  if (author) {
    const formattedAuthor = {
      name: author.name,
      nationality: author.nationality,
    };

    res.json(formattedAuthor);
  } else {
    res.status(404).send("Not found");
  }
});

app.get("/json/:id/books", (req, res) => {
  const { id } = req.params;
  const author = authors.find((author) => author.id === Number(id));

  if (author) {
    const formattedAuthor = {
      books: author.books,
    };

    res.json(formattedAuthor);
  } else {
    res.status(404).send("Not found");
  }
});

module.exports = app;
