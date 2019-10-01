const db = require('../../connector/db');

function addNewReview({ rating, comment, productId, email }) {
    return db
        .task(async t => {
            const [{ id: userId } = {}] = await t.query(
                `SELECT id FROM "user" WHERE email = $[email]`,
                {
                    email,
                },
            );
            if (userId) {
                await t.query(
                    `INSERT INTO review (rating, comment, product_id, user_id) VALUES ($[rating], $[comment], $[productId], $[userId])`,
                    {
                        rating,
                        comment,
                        productId,
                        userId,
                    },
                );
                return { status: 'success' };
            }
            return { status: 'failed' };
        })
        .catch(error => {
            throw error;
        });
}

module.exports = {
    addNewReview,
};
