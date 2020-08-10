const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const emails = [];
console.log("aaaaaaaaaaaaaaaaaaaaaa a")
app.post("/", (req, res) => {
    emails.push(req.body.email);
    res.json(`Email added to newsletter ${req.body.email}`);
});
app.get("/", (req, res) => {
    console.log("printing a");
    res.json(emails);
});

app.listen(80, () => {
    console.log(`Server run on port 80`);
});