const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.get("/", async(req, res) => {

    const response = await axios.get("http://mailer/");

    res.render("index", { emails: response.data });
});
// if (emails == 'A') {
//     app.post("/A", async(req, res) => {
//         const response = await axios.post("http://A/", {
//             email: req.body.email,
//         });
//         res.json(response.data);
//     });
// } else {
//     app.post("/B", async(req, res) => {
//         const response = await axios.post("http://B/", {
//             email: req.body.email,
//         });
//         res.json(response.data);
//     });
// }


app.post("/newsletter", async(req, res) => {
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

    // } else {
    //     const response = await axios.post("http://mailer/", {
    //         email: req.body.email,
    //     });
    //     res.json(response.data);
    // }
    const response = await axios.post("http://mailer/", {
        email: req.body.email,
    });
    res.json(response.data);

});
app.listen(80, () => {
    console.log(`Server run on port 80`);
});