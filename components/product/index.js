const express = require('express');
const router = express.Router();

const ProductService = require('./productService');

router.get('/', async (req, res) => {
    try {
        const { brandID } = req.query;
        const listBrands = await ProductService.getLatestProducts(brandID);
        return res.json(listBrands);
    } catch (error) {
        return res.status(500).send({ status: 'Something went wrong' });
    }
});

module.exports = router;
