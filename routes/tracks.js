const express = require("express");

const router = express.Router();

const {getItems, getItem, createItem} = require("../controllers/tracks")
// http://localhost/tracks GET POST PUT DELETE
const {validateObjectDataCreate} = require("../validators/tracks");

router.get("/", getItems)

router.post("/",validateObjectDataCreate, createItem)

module.exports = router