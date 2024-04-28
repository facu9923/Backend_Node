const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
    const data = ["hola", "storage"]
    res.send({data})
})


module.exports = router
