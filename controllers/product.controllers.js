const db = require('../models')
const { Product } = db
const { sendSuccess, sendError } = require('../utils/responseHelper');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
        const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

        const offset = (page - 1) * limit;

        const products = await Product.findAll({
            limit: limit,  // Limit the number of products
            offset: offset // Skip the products based on the page
        });

        const totalProducts = await Product.count(); // Get the total count for pagination
        const totalPages = Math.ceil(totalProducts / limit); // Calculate total pages

        const data = {
            products,
            currentPage: page,
            totalPages,
            totalProducts,
        }

        sendSuccess(res, data, 'Products retrieved successfully');


    } catch (error) {
        sendError(res, 'Failed to retrieve products', 500);
    }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
    const { id } = req.params; // Getting the product ID from URL params

    try {
        const product = await Product.findOne({ where: { id } });

        if (!product) {
            return sendError(res, `Product with ID: ${id} not found`, 404); // Send error if product not found
        }

        sendSuccess(res, product, 'Product fetched successfully'); // Send success with product data
    } catch (error) {
        sendError(res, 'Failed to fetch product', 500); // Send error if an issue occurs during the query
    }
};

// Add a new product
exports.addProduct = async (req, res) => {
    const productData = req.body; // Get product data from the request body
    console.log(productData);

    try {
        const newProduct = await Product.create(productData);

        sendSuccess(res, newProduct, 'Product added successfully'); // Send success with new product data
    } catch (error) {
        sendError(res, 'Failed to add product', 500); // Send error if an issue occurs during product creation
    }
};

// Update an existing product
exports.updateProduct = (req, res) => {
    const { id } = req.params; // Getting the product ID from URL params
    const updatedProductData = req.body; // Get updated data from request body
    res.send(`Update product with ID: ${id}`);
};

// Delete a product
exports.deleteProduct = (req, res) => {
    const { id } = req.params; // Getting the product ID from URL params
    res.send(`Product with ID: ${id} has been deleted`);
};
