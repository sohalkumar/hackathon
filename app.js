const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const UserDetail = require("./Schemas/login")
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/user-login")
.then(app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("Server running on port 3000")
}))
    .catch((e) => {
        console.log(e)
    }
)

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/login.html")
})

app.post("/login", (req, res) => {
    let userEmail = req.body.email
    let userPass = req.body.password
    UserDetail.find({email: userEmail}, (err, data) => {
        if (data.length == 0) {
            res.sendFile(__dirname + "/loginfailure.html")
        }
        if (data[0].email == userEmail
            && data[0].password == userPass) {
            res.send("<h1>Success</h1>")
        } else if (data[0].password != userPass) {
            
        }
    })
})

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/register.html")
})

app.post("/register", (req, res) => {
    UserDetail.find({email: req.body.email}, (err, data) => {
        if (data != null) {
            res.sendFile(__dirname + "/registerfailure.html")
        }
        UserDetail.
    })
})