// Dependencies
const express = require("express");
const app = express();
const methodOverride = require("method-override")
require("dotenv").config();
const beersRouter = require("./routers/beersRouter")

// Middleware
app.use("view engine", "ejs")
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true})) 
app.use(express.static("public"))
app.use(express.json());
app.use("/beers", beersRouter)

app.listen(process.env.PORT, () => {
    console.log(`listening on PORT ${process.env.PORT}`)
})