const controller = require("../controllers/series.controller");

//Routes
module.exports = (server) => {
    server.route([
        //
        //Hämta alla serier
        {
            method: "GET",
            path: "/series",
            handler: controller.getAllSeries
        },
        //
        //Hämta specifik serie med id
        {
            method: "GET",
            path: "/series/{id}",
            handler: controller.getOneSeries
        },
        //
        //Lägga till en serie
        {
            method: "POST",
            path: "/series",
            handler: controller.postNewSeries
        },
        //
        //Ändra i en befintlig serie
        {
            method: "PUT",
            path: "/series/{id}",
            handler: controller.updateSeriesById
        },
        //
        //Radera en befintlig serie med id
        {
            method: "DELETE",
            path: "/series/{id}",
            handler: controller.deleteSeriesById
        }
    ])
}