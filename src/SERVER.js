const express = require("express");
const server = express();
const productController = require("./controllers/product_controller");

const bodyParser = require('body-parser');
require('dotenv').config();

const mongoose = require("mongoose");
const db  = require("./config/db_config");



server.use(bodyParser.json())

server.post("/products" , productController.create )
server.get("/products" , productController.fetctAll)
server.get("/products/:id" , productController.fetchOne)
server.delete("/products/:id" , productController.deleteProduct)
server.put("/products/:id" , productController.updateProduct)

const PORT = process.env.PORT || 5050;

server.listen(PORT, () => {
  console.log(`server is running : http://localhost:${PORT}`)
})