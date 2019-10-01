const express = require('express');
const router = express.Router();

const ReviewService = require('./reviewService');

router.post('/', async (req, res) => {
    try {
        const { rating, comment, productId, email } = req.body;
        if (!rating || !comment || !productId || !email) {
            throw { code: 400 };
        }
        const addReview = await ReviewService.addNewReview({ rating, comment, productId, email });
        return res.json(addReview);
    } catch (error) {
        if (error.code === 400) {
            return res.status(400).send({ status: 'Bad Request' });
        }
        return res.json({ status: 'Something went wrong' });
    }
});

module.exports = router;
