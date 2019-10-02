const express = require('express');
const router = express.Router();

const ProductService = require('./productService');

router.get('/:id?', async (req, res) => {
    try {
        const { brandID } = req.query;
        const { id: productID } = req.params;
        if (productID) {
            const productById = await ProductService.getProductById(productID);
            return res.json(productById);
        }
        const listBrands = await ProductService.getLatestProducts(brandID);
        return res.json(listBrands);
    } catch (error) {
        return res.status(500).send({ status: 'Something went wrong' });
    }
});

module.exports = router;
