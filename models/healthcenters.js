// MongoDB collection model for hospitals, clinics etc.

const mongoose = require("mongoose")

const Center = new mongoose.model(
    "Center",
    new mongoose.Schema({
        name: { type: String, required: true },
        city: { type: String, required: true },
        type: { type: String, required: true },
        disease: { type: String, required: false }
    })
)

module.exports = Center