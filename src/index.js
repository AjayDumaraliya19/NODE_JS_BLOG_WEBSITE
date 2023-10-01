const http = require("http");
const express = require("express");
const config = require("./config/config");
const { connectDB } = require("./db/dbconnection");
const bodyParser = require("body-parser");
const router = require("./routes/v1");

const app = express();

/** Allow form-data from body */
app.use(bodyParser.urlencoded({ extended: false }));

/** Allow json data from body */
app.use(bodyParser.json());

/** Routes connection */
app.use("/v1", router);

/** Whenever route not create and try to use that route then throw the error */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

/** Database connection */
connectDB();

/** Create the server */
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`Server listing port numer ${config.port}`);
});
