const express = require("express");

const router = express.Router();

// http://localhost/tracks GET POST PUT DELETE


router.get("/", (req, res) => {
    const data = ["hola", "tracks"]
    res.send({data})
})


module.exports = router