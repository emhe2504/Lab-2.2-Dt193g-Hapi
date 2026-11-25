'use strict';

const Hapi = require('@hapi/hapi');
const mongoose = require("mongoose");
require("dotenv").config();

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    //Efter felsökning
    // Använder Cloudflares DNS-servrar eftersom nätverkets DNS-servrar inte fungerade korrekt
    const dns = require('node:dns');
    dns.setServers(['1.1.1.1', '1.0.0.1']);

    try {
        //Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");

        await server.start();
        console.log('Server running on %s', server.info.uri);

    } catch (error) {
        console.error("Error while starting application:", error);
        process.exit(1);
    }
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();