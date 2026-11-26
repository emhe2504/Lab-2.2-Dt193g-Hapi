const Series = require("../models/series.model");

//Routes
module.exports = (server) => {
    server.route([
        //
        //Hämta alla serier
        {
            method: "GET",
            path: "/series",
            handler: async (request, h) => {
                try {
                    return await Series.find();
                } catch (error) {
                    return h.response("Could not get series due to error: " + error).code(500);
                }
            }
        },
        //
        //Hämta specifik serie med id
        {
            method: "GET",
            path: "/series/{id}",
            handler: async (request, h) => {
                try {
                    const id = request.params.id;
                    return await Series.findById(id);
                } catch (error) {
                    return h.response("Could not get series due to error: " + error).code(500);
                }
            }
        },
        //
        //Lägga till en serie
        {
            method: "POST",
            path: "/series",
            handler: async (request, h) => {
                try {
                    const series = new Series(request.payload);
                    return await series.save();
                } catch (error) {
                    return h.response("Could not post series due to error: " + error).code(500);
                }
            }
        },
        //
        //Ändra i en befintlig serie
        {
            method: "PUT",
            path: "/series/{id}",
            handler: async (request, h) => {
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
        }
    ])
}