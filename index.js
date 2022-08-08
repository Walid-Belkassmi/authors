const express = require("express");
const app = express();
const port = 5000;
const authorsRoutes = require("./routes/authors");

app.get("/", (req, res) => {
  res.send("Authors API");
});

app.use("/authors", authorsRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
