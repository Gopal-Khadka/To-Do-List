const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
// let prevData=localStorage.getItem("data")
// console.log(prevData)
let tasks = ["Meditation", "Eat More", "Run More"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true })); // used to parse html inputs
app.use(express.static("public")); // uses public folder

app.get("/", (req, res) => {
  let date = new Date();
  // localStorage.setItem("data", tasks);
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  let dayText = date.toLocaleDateString("en-US", options);
  const dateData = {
    day: dayText.split(",")[0],
    tasks,
  };

  res.render("index", dateData);
});

app.post("/", (req, res) => {
  let task = req.body.task;
  tasks.push(task);
  res.redirect("/");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
