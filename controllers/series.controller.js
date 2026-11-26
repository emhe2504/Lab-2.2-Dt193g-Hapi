const Series = require("../models/series.model");

//Hämta alla serier
exports.getAllSeries = async (request, h) => {
    try {
        return await Series.find();
    } catch (error) {
        return h.response("Could not get series due to error: " + error).code(500);
    }
}

//Hämta befintlig serie med id
exports.getOneSeries = async (request, h) => {
    try {
        const id = request.params.id;
        const series = await Series.findById(id);

        //Om serien inte finns
        if (!series) {
            return h.response("Series not found").code(404);
        }
        return series;

    } catch (error) {
        if (error.name === "CastError") {
            return h.response("Invalid series ID").code(400);
        }

        return h.response("Could not get series due to error: " + error).code(500);
    }
}

//Lägga till en serie
exports.postNewSeries = async (request, h) => {
    try {
        const series = new Series(request.payload);
        return await series.save();
    } catch (error) {
        return h.response("Could not post series due to error: " + error).code(500);
    }
}

//Uppdatera befintlig serie med id
exports.updateSeriesById = async (request, h) => {
    try {
        const id = request.params.id;
        const series = await Series.findById(id);
        if (series) {

            //Addera ändringarna separat
            series.title = request.payload.title;
            series.comment = request.payload.comment;
            series.rating = request.payload.rating;
            series.haveSeen = request.payload.haveSeen;

            return await series.save();
        } else {
            return h.response("Series not found").code(404);
        }

    } catch (error) {
        //Angivet id är ogiltigt
        if (error.name === "CastError") {
            return h.response("Invalid series ID").code(400);
        }

        return h.response("Could not update series due to error: " + error).code(500);
    }
}

//Radera en serie med id
exports.deleteSeriesById = async (request, h) => {
    try {
        const id = request.params.id;
        const series = await Series.findById(id);
        if (series) {
            await series.deleteOne();
            return h.response("Series deleted successfully").code(200);
        } else {
            return h.response("Series not found").code(404);
        }

    } catch (error) {
        //Angivet id är ogiltigt
        if (error.name === "CastError") {
            return h.response("Invalid series ID").code(400);
        }

        return h.response("Could not delete series due to error: " + error).code(500);
    }
}