require("source-map-support").install();
import express = require("express");
import path = require("path");
import fs = require("fs");
import Package = require('package-reader');


const app = express();

console.log("Configuring express...");
app.set("port", process.env["PORT"] || 8003);
app.enable("trust proxy");
const routePrefix = `/${Package.getName()}/`;
const exts = /\.js$/;
const routedir = path.join(__dirname, "routes");

console.log("Setting up routes...");
// Initialize logger
/* istanbul ignore if */ // Can't test this.
if (process.env["NODE_ENV"] !== "test") app.use(require('morgan')("dev"));

// Initialize enpoints
console.log("Setting up routes...");

// Initialize default route
/* istanbul ignore if */
app.all(routePrefix, (req, res) => {
    const serviceInfo = Package.getPackage();
    res.setHeader("Content-Type", "application/json");
    res.send(serviceInfo);
});

fs.readdirSync(routedir).forEach(function (f) {
    if (f[0] !== "." && exts.test(f)) {
        const routePath = path.join(routedir, f);
        const routeModule = require(routePath);
        const usepath = routePrefix + f.replace(exts, "");
        console.log('usepath: ', usepath);
        /* istanbul ignore if */ // this breaks the build process, no need to cover it
        if (!routeModule.route) {
            console.error(`Route module ${f} does not export itself properly`);
            throw new Error(`Unable to set up route ${f}. Check the route module for unexported route variables`);
        }
        app.use(usepath, routeModule.route);
    }
});

export = app;

/* istanbul ignore if */
if (process.env["NODE_ENV"] !== "test") {
    app.listen(app.get("port"), function () {
        console.log("Express server listening on port " + app.get("port"));
    });
}