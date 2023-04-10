const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const{getAllBeers, sendNewBeerForm, seedBeers, getBeerById} = require("../controllers/beers")

//==============ROUTES============================
//INDEX 
router.get("/", getAllBeers);

//NEW
router.get("/new", sendNewBeerForm);

//Seed
router.get("/seed", seedBeers);

//SHOW
router.get("/:id", getBeerById);

// //CREATE 
// router.post("/", );

// //EDIT
// router.get("/:id/edit", );

// //UPDATE
// router.put("/:id", );

// //DELETE
// router.delete("/:id", );


module.exports = router;