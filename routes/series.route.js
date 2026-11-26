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
        }
    ])
}