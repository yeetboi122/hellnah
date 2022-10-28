const express = require("express");
const path = require("path");
const app = express();

app.get("*", (req, res) => {
    let url = req.url;
    if (url == "/") {
        res.sendFile(path.join(__dirname, "public", "index.html"));
    } else {
        res.sendFile(path.join(__dirname, "public", url));
    }
});

app.listen("3000", () => {
    console.log("Listening on port 3000");
});