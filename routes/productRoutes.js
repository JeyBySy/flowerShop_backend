const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productControllers');

// Get all products
router.route('/')
    .get(ProductController.getAllProducts)
    .post(ProductController.addProduct);

// Get, update, or delete a product by ID
router.route('/:id')
    .get(ProductController.getProductById)
    .put(ProductController.updateProduct)
    .delete(ProductController.deleteProduct);

module.exports = router;
