const Product = require('../models/product.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    console.log(JSON.stringify(req.body));
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Product name can not be empty"
        });
    }

    // Create a Note
    const product = new Product({
        name: req.body.name,
        originalPrice: req.body.originalPrice,
        sellingPrice: req.body.sellingPrice,
        shippingCost: req.body.shippingCost,
        discount: req.body.discount,
        couponCode:req.body.couponCode,
        picture: req.body.picture,
        sold:req.body.sold,
        soldOn : req.body.soldOn
    });

    // Save Note in the database
    product.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Product."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Product.find()
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Products."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Product.findById(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });            
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Product with id " + req.params.productId
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    console.log("uopdate "+req.params.productId);
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Product name can not be empty"
        });
    }

    // Find note and update it with the request body
    Product.findByIdAndUpdate(req.params.productId, {
        name: req.body.name,
        originalPrice: req.body.originalPrice,
        sellingPrice: req.body.sellingPrice,
        shippingCost: req.body.shippingCost,
        discount: req.body.discount,
        couponCode:req.body.couponCode,
        picture: req.body.picture,
        sold:req.body.sold,
        soldOn : req.body.soldOn
    }, {new: true})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Error updating Product with id " + req.params.productId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    console.log(req.params.productId);
    Product.findByIdAndRemove(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });
        }
        res.send({message: "Product deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Product with id " + req.params.productId
        });
    });
};