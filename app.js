require("dotenv").config()
const express = require("express")
const cors= require("cors")
const app = express()
const dbConnect = require('./config/mongo')

app.use(express.json())
app.use(cors())
app.use(express.static("storage"))
/**
 * Invocamos a las rutas 
 */

app.use("/api", require("./routes"))

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('http://localhost:'+port)
})

dbConnect()