// get and post routes for login

const router = require("express").Router()
const path = require("path")
const UserDetail = require(path.join(__dirname, "../models/login.js"))

router.get("/", (req, res) => { 
    res.sendFile("/public/html/register.html", { root: "." })
})

router.post("/", (req, res) => {
    UserDetail.find({email: req.body.email}, (err, data) => {
        if (data.length != 0) {
            res.sendFile("/public/html/registerfailure.html", { root: "." })
        } else {
            let details = new UserDetail({
                email: req.body.email,
                password: req.body.password
            })
            details.save()
            res.sendFile("/public/html/index.html", { root: "." })
        }
    })
})

module.exports = router