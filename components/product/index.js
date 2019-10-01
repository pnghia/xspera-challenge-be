const express = require('express');
const router = express.Router();

const ProductService = require('./productService');

router.get('/', async (req, res) => {
    try {
        const { brandID } = req.query;
        const listBrands = await ProductService.getLatestProducts(brandID);
        return res.json(listBrands);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
