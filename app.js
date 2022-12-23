const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const ejs = require("ejs");
const login = require(__dirname + "/routes/login.js")
const register = require(__dirname + "/routes/register.js")
const search = require(__dirname + "/routes/search.js")
const app = express()

mongoose.set('strictQuery', true)

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/caremap")
.then(app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000")
}))
    .catch(e => {
        console.log(e)
    }
)

app.get("/", (req, res) => {
    res.render("index", {listItems : []})
})

app.use("/login", login)
app.use("/register", register)
app.use("/search", search)