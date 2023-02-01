const express = require("express");
var randomColor = require("randomcolor");
const bodyParser = require("body-parser");
const app = express();
const moment = require("moment");
let ejs = require("ejs");
const all = require("everyday-fun");
var path = require("path");
// location = path.join(__dirname, "/styles");
// console.log(location);
// console.log(__dirname+"/styles");
// app.use(express.static(__dirname + "../public"));
// app.use(express.static(location));
// console.log(app.use(express.static(path.join(__dirname, "static"))));
// app.use("/", express.static(__dirname));
// app.use(express.static("styles"));
app.use(express.static("styles"));

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// C:\Users\ajink\Desktop\AU_50\Ajinkya-Bhilare-au50\coding-challenges\week24\Day01\app.js
app.get("/randomColor", (req, res) => {
  // console.log(__dirname);
  // res.send(
  //   randomColor({
  //     luminosity: "dark",
  //     format: "rgba",
  //   })
  // );
  res.render("randomColour", {
    color: randomColor({
      luminosity: "dark",
      format: "rgba",
    }),
  });
});

app.get("/currentDate", (req, res) => {
  //   res.send(moment().utcOffset("+05:30").format("MMMM Do YYYY, h:mm:ss a"));
  res.render("date", {
    dates: moment().utcOffset("+05:30").format("MMMM Do YYYY, h:mm:ss a"),
  });
});
app.get("/joke", (req, res) => {
  // res.send(all.getRandomJoke());
  randomJoke = all.getRandomJoke();

  res.render("jokes", { jokes: randomJoke.body });
});
app.get("/quote", (req, res) => {
  // res.send(all.getRandomQuote());
  randomQuote = all.getRandomQuote();
  res.render("quotes", {
    quote: randomQuote.quote,
    author: randomQuote.author,
  });
});
app.get("/riddle", (req, res) => {
  // res.send(all.getRandomRiddle());
  randomRiddle = all.getRandomRiddle();
  res.render("riddle", {
    riddle: randomRiddle.riddle,
    answer: randomRiddle.answer,
  });
});

app.get("/", (req, res) => {
  // res.send("Good Morning ");
  // console.log(__dirname);
  res.render("home", { good: "Good Morning" });
});

// PORT
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
