const express = require("express");
const Beer = require("../models/beer")
const startBeers = require("../db/beerSeedData")

//INDEX
const getAllBeers = async (req, res) => {
	const beers = await Beer.find({});
    const beersLength = beers.length
	res.render("beers/index.ejs" , {beers: beers, hideNewButton: beersLength >11 });
    //If hideNewButton is true(>11), the "newButton" won't be rendered.
};

//NEW
const sendNewBeerForm = (req,res) => {
    res.render("beers/new")
};

//AGE
const beerGallery = async(req,res) => {
    const beers = await Beer.find({});
    res.render("beers/gallery", {beers})
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
    beer.img = beer.showImg || beer.canLabel
    res.render("beers/show", {beer})
}

//CREATE 
const postNewBeer = async (req,res) => {
    const {canLabel,name,brewery,price,style,hops,notes,abv} = req.body;
    const newBeer = {canLabel,name,brewery,price,style,hops,notes,abv,showImg:req.body.showImg || canLabel};
    // newBeer.showImg = req.body.showImg ? req.body.showImg : canLabel;
    const beer = await Beer.create(newBeer);
    res.redirect("/beers")
};
//EDIT
const editBeerById = async (req,res) => {
    const beer = await Beer.findById(req.params.id);
    res.render("beers/edit", {beer})
};
//UPDATE
const putBeerById = async (req,res) => {
    const id = req.params.id
    const beer = await Beer.findByIdAndUpdate(id, req.body);
    res.redirect("/beers")
};
//DELETE
const deleteBeerById = async (req,res) => {
    const beer = await Beer.findByIdAndDelete(req.params.id);
    res.redirect("/beers")
};

module.exports = {
    getAllBeers,
    sendNewBeerForm,
    seedBeers,
    getBeerById,
    postNewBeer,
    editBeerById,
    putBeerById,
    deleteBeerById,
    beerGallery
}