// Import express
import express from "express";
// Import Controller Product

 import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductsChart
 } from "../controllers/Product.js";
 
 // Init express router
const productroute = express.Router();
 
// Route get semua Product
productroute.get('/products', getProducts);
// Route get Product by id
productroute.get('/products/:id', getProductById);
// Route create Product baru
productroute.post('/products', createProduct);
// Route update Product by id
productroute.put('/products/:id', updateProduct);
// Route delete Product by id
productroute.delete('/products/:id', deleteProduct);
//untuk chart
productroute.get('/chartdata', getProductsChart);

 
// export router
export default productroute;