const express=require("express");

const fetchFromDB = require("../controllers/fetchFromDB");

const router=express.Router();

router.get("/fetch-from-db", fetchFromDB);

module.exports=fetchFromDB;