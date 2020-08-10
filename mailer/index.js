const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");


const emails = [];

app.post("/", async(req, res) => {
    if (req.body.email == 'A') {
        console.log("a print")
        const response = await axios.post("http://a/", {
            email: req.body.email,
        });
        // res.json(response.data);
        res.json(`Email added to newsletter ${req.body.email}`);
    } else if (req.body.email == 'B') {
        console.log("b print")
        const response = await axios.post("http://b/", {
            email: req.body.email,
        });
        // res.json(response.data);
        res.json(`Email added to newsletter ${req.body.email}`);
    } else {
        emails.push(req.body.email);
        res.json(`Email added to newsletter ${req.body.email}`);
    }
});

app.get("/", (req, res) => {
    res.json(emails);
});

app.listen(80, () => {
    console.log(`Server run on port 80`);
});
// if (req.body.email == 'A') {
//     console.log("a print")
//     const response = await axios.post("http://a/", {
//         email: req.body.email,
//     });
//     res.json(response.data);
// } else if (req.body.email == 'B') {
//     console.log("b print")
//     const response = await axios.post("http://b/", {
//         email: req.body.email,
//     });
//     res.json(response.data);

// }