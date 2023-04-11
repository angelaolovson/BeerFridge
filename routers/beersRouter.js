const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const{getAllBeers, sendNewBeerForm, seedBeers, getBeerById, postNewBeer, editBeerById, putBeerById, deleteBeerById} = require("../controllers/beers")

//==============ROUTES============================
//INDEX 
router.get("/", getAllBeers);

//NEW
router.get("/new", sendNewBeerForm);

//Seed
router.get("/seed", seedBeers);

//SHOW
router.get("/:id", getBeerById);

//CREATE 
router.post("/", postNewBeer);

//EDIT
router.get("/:id/edit", editBeerById);

//UPDATE
router.put("/:id", putBeerById);

//DELETE
router.delete("/:id", deleteBeerById);


module.exports = router;