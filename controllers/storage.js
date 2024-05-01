const {storageModel} = require("../models");
const URL_PUBLIC = process.env.URL_PUBLIC;
/**
 * obetener items
 * @param req 
 * @param res
 */
const getItems = async (req, res) => {
    const data = await storageModel.find({});
    res.send({data});
};

/**
 * obtener un detalle
 * @param req 
 * @param res 
 */
const getItem = (req, res) => {

};

/**
 * crear un item
 * @param req 
 * @param res 
 */
const createItem = async (req, res) => {
    const { body, file } = req
    console.log(file)
    const fileData = {
        filename : file.filename,
        url : URL_PUBLIC + '/' + file.filename
    }
    const data = await storageModel.create(fileData)
    res.send(data)
};

/**
 * actualziar un item
 * @param req 
 * @param res 
 */
const updateItem = (req, res) => {

};

/**
 * eliminar un item
 * @param req 
 * @param res 
 */
const deleteItem = (req, res) => {

};

module.exports = {getItem, getItems, createItem, updateItem, deleteItem};