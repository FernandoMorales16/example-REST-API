const Product = require('../models/productoModels');

module.exports = {

    index: async (req, res, next) => {
        const producto = await Product.find({});
        res.status(200).json(producto);
    },

    newProduct: async (req, res, next) => {
        const newProduct = new Product(req.body);
        const product = await newProduct.save();
        res.status(200).json(product);
    },

    getProduct: async (req, res, next) => {
        const {productId} = req.params;
        const product = await Product.findById(productId);
        res.status(200).json(product);
    },

    replaceProduct: async (req, res, next) => {
        const {productId} = req.params;
        const newProduct = req.body;
        const oldProduct = await Product.findByIdAndUpdate(productId, newProduct);
        res.status(200).json({success: true});
    },

    deleteProduct: async (req, res, next) => {
        const {productId} = req.params;
        await Product.findByIdAndRemove(productId);
        res.status(200).json({success: true});
    }
};