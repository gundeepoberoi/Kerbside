const express = require("express"),
  app = express();

//setting view engine to ejs
app.set("view engine", "ejs");

//route for index page
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/account", function (req, res) {
  res.render("account");
});

app.get("/add", function (req, res) {
  res.render("add");
});

app.get("/listings", function (req, res) {
  res.render("listings");
});

app.listen(8080, function () {
  console.log("Server is running on port 8080 ");
});

app.use(express.static('public'));