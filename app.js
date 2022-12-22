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
    console.log(req.body);
    let userEmail = req.body.email
    let userPass = req.body.password
    UserDetail.find({ email: userEmail }, (err, data) => {
        console.log(data.length == 0);
        if (data.length == 0) {
            res.sendFile(__dirname + "/loginfailure.html")
        }
        else if (data[0].email == userEmail
            && data[0].password == userPass) {
            res.send("<h1>Success</h1>")
        } else if (data[0].password != userPass) {
            res.redirect("/login")
        }
    })
})

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/register.html")
})

app.post("/register", (req, res) => {
    UserDetail.find({email: req.body.email}, (err, data) => {
        if (data.length != 0) {
            res.sendFile(__dirname + "/registerfailure.html")
        } else {
            let details = new UserDetail({
                email: req.body.email,
                password: req.body.password
            })
            details.save()
            res.send("<h1>Success</h1>")
        }
    })
})