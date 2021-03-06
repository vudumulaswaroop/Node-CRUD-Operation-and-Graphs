const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))

// simple route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

require("./app/routes/routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
