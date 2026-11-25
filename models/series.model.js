const mongoose = require("mongoose");

const seriesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Ange titel"]
    },
    comment: {
        type: String,
        required: [true, "Ange kommentar"]
    },
    rating: {
        type: Number,
        required: [true, "Ange rating 1-3"],
        min: [1, "Rating måste vara minst 1"],
        max: [3, "Rating får vara högst 3"]
    },
    haveSeen: {
        type: Boolean,
        required: true
    }
});