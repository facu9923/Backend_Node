const { matchedData } = require("express-validator");
const {tracksModel} = require("../models");
const { handlHttpError } = require("../utils/handleError");
/**
 * obetener items
 * @param req 
 * @param res
 */
const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({});
        res.send({data});
    } catch (e) {
        handlHttpError(res, "ERROR-GET-ITEMS");
    }

};

/**
 * obtener un detalle
 * @param req 
 * @param res 
 */
const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const id =req;
        const data = await tracksModel.findById({id});
        res.send({data});
    } catch (e) {
        handlHttpError(res, "ERROR-GET-ITEM");
    }
};

/**
 * crear un item
 * @param req 
 * @param res 
 */
const createItem = async (req, res) => {
    try {
 
        const body = matchedData(req)
        const data = await tracksModel.create(body)
        res.send(data)
    } catch (e) {
        handlHttpError(res, "ERROR-CREATE-ITEM");
    }
};

/**
 * actualziar un item
 * @param req 
 * @param res 
 */
const updateItem = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req);;
        const data = await tracksModel.findOneAndUpdate(
            id, body
        );
        res.send(data)
    } catch (e) {
        handlHttpError(res, "ERROR-UPDATE-ITEM");
    }
};

/**
 * eliminar un item
 * @param req 
 * @param res 
 */
const deleteItem = async (req, res) => {

};

module.exports = {getItem, getItems, createItem, updateItem, deleteItem};