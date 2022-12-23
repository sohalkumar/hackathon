// get route for search by location

const router = require("express").Router()
const path = require("path")
const healthcenters = require(path.join(__dirname, "../models/healthcenters.js"))

router.get("/", (req, res) => {
    const city = (req.body.city).toLowerCase()
    const disease = (req.body.disease).toLowerCase()
    healthcenters.find({ city: city, disease: { $regex: disease }}, (err, data) => {
        res.render("index", { center: data, i : 1})
    })
})

module.exports = router