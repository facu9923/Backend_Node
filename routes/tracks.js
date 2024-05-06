const express = require("express");

const router = express.Router();

const {getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/tracks");
// http://localhost/tracks GET POST PUT DELETE
const {validateObjectDataCreate, validateGetObject} = require("../validators/tracks");

const customHeader = require("../middleware/customHeader");

/**
 * listar items
 */
router.get("/", getItems);

/**
 * crear dato
 */
router.post("/", validateObjectDataCreate, createItem);

/**
 * listar item
 */
router.get("/:id", validateGetObject, getItem);


/**
 * Actualizar item
 */
router.put("/:id", validateGetObject, validateObjectDataCreate, updateItem);

router.put("/", deleteItem);


module.exports = router