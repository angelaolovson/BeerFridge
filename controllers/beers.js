const express = require("express");
const Beer = require("../models/beer")
const startBeers = require("../db/beerSeedData")

//INDEX
const getAllBeers = async (req, res) => {
	const beers = await Beer.find({});
	res.render("beers/index.ejs" , {beers});
};

//NEW
const sendNewBeerForm = (req,res) => {
    res.render("beers/new")
};
//Seed
const seedBeers= async (req,res) => {
    await Beer.deleteMany({});
    await Beer.create(startBeers);
    res.redirect("/beers")
};
//SHOW
const getBeerById = async (req,res) => {
    const beer = await Beer.findById(req.params.id);
    res.render("beers/show", {beer})
}
// const = (req,res) => {};
// //CREATE 
// const = (req,res) => {};
// //EDIT
// const = (req,res) => {};
// //UPDATE
// const = (req,res) => {};
// //DELETE
// const = (req,res) => {};

module.exports = {
    getAllBeers,
    sendNewBeerForm,
    seedBeers,
    getBeerById
}