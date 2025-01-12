const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/order.controllers');

// Routes for Order CRUD operations
router.route('/')
    .get(OrderController.getAllOrders) // Get all orders
    .post(OrderController.createOrder); // Create a new order

router.route('/:id')
    .get(OrderController.getOrderById) // Get a single order by ID
    .put(OrderController.updateOrder) // Update an existing order by ID
    .delete(OrderController.deleteOrder); // Delete an order by ID

module.exports = router;
