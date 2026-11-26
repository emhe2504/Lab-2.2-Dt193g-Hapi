const mongoose = require("mongoose");

//Schema för en serie
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
        min: [0, "Rating måste vara minst 0"],
        max: [3, "Rating får vara högst 3"]
    },
    haveSeen: {
        type: Boolean,
        required: true
    }
});

const Series = mongoose.model("Series", seriesSchema);
module.exports = Series;