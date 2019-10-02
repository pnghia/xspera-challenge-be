const ReviewDAL = require('./reviewsDAL');

const addNewReview = async ({ rating, comment, productId, email }) => {
    const addReview = await ReviewDAL.addNewReview({ rating, comment, productId, email });
    return addReview;
};

module.exports = {
    addNewReview,
};
