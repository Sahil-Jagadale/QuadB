const express=require("express");

const fetchAndStore = require('../controllers/fetchAndStore');

const router=express.Router();

router.get("/fetch-and-store", fetchAndStore);

module.exports=fetchAndStore;