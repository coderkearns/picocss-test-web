#!/usr/bin/env node

const os = require("os");

// Uses express to serve the current directory as a static web server.
const express = require('express');
const app = express();

app.use(express.static(__dirname));

const port = process.env.PORT || 3000;

const server = app.listen(port, "0.0.0.0", () => {
    const localHost = "127.0.0.1"
    const lanHost = os.networkInterfaces().wlp2s0[0].address;

    console.log(`[DEBUG] Listening!`);
    console.log(`[INFO] http://${localHost}:${port}`);
    console.log(`[INFO] http://${lanHost}:${port}`);
})

process.on('SIGINT', () => {
    console.log(`[DEBUG] Closing server...`);
    server.close(() => {
        console.log(`[DEBUG] Server closed!`);
        process.exit(0);
    });
});
