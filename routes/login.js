// get and post routes for login

const router = require("express").Router()
const path = require("path")
const UserDetail = require(path.join(__dirname, "../models/login.js"))

router.get("/", (req, res) => {
    res.sendFile("/public/html/login.html", { root: "." })
})

router.post("/", (req, res) => {
    let userEmail = req.body.email
    let userPass = req.body.password
    UserDetail.find({ email: userEmail }, (err, data) => {
        if (data.length == 0) {
            res.sendFile("/public/html/loginfailure.html", { root: "." })
        }
        else if (data[0].email == userEmail
            && data[0].password == userPass) {
            res.sendFile("/public/html/index.html", { root: "." })
        } else if (data[0].password != userPass) {
            res.redirect("/login")
        }
    })
})

module.exports = router