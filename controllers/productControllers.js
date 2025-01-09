// Get all products
exports.getAllProducts = (req, res) => {
    res.send('Fetch all products');
};

// Get a single product by ID
exports.getProductById = (req, res) => {
    const { id } = req.params; // Getting the product ID from URL params
    res.send(`Fetch product with ID: ${id}`);
};

// Add a new product
exports.addProduct = (req, res) => {
    const productData = req.body; // Get product data from the request body
    res.send('Product added');
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
