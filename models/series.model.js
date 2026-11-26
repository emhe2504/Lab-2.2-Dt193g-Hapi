const mongoose = require("mongoose");

//Schema för en serie
const seriesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Ange titel"],
        trim: true
    },
    comment: {
        type: String,
        required: [true, "Ange kommentar"],
        trim: true
    },
    rating: {
        type: Number,
        required: [true, "Ange rating 0-3. (0 är för om du inte sett serien)."],
        min: [0, "Rating måste vara minst 0"],
        max: [3, "Rating får vara högst 3"],

        //Validering
        validate: {
            validator: function (value) {
                if (this.haveSeen) {
                    return value >= 1;
                } else {
                    return value === 0;
                }
            },
            message: "En sedd serie måste ha betyg 1-3 och en osedd serie måste ha betyg 0."
        }
    },
    haveSeen: {
        type: Boolean,
        required: [true, "Sätt true eller false på HaveSeen"]
    }
});

const Series = mongoose.model("Series", seriesSchema);
module.exports = Series;