const {mongoose} = require("../db/connection");


const Schema = mongoose.Schema

const beerSchema = new Schema({
    name: String,
    brewery: String,
    price: Number,
    abv: Number,
    style: String,
    notes: String,
    hops: String,
    canImg: String,
    showImg: String,
    canLabel: String
})

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;