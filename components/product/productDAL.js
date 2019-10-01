const db = require('../../connector/db');

function getLatestProducts(brandID) {
    if (brandID) {
        return db.query(
            `SELECT 
            products.id AS "productID", 
            products.product_name AS "productName", 
            products.description, 
            brands.name AS "brandName",
            "user".username,
            review.comment
        FROM products 
            LEFT JOIN review ON products.id = review.product_id 
            JOIN brands ON products.brand_id = brands.id
            LEFT JOIN "user" ON "user".id = review.user_id
        WHERE brand_id = $[brandID]
            ORDER BY created
            LIMIT 10`,
            {
                brandID,
            },
        );
    }
    return db.query(`
    SELECT 
        products.id AS "productID", 
        products.product_name AS "productName", 
        products.description, 
        brands.name AS "brandName",
        "user".username,
        review.comment
    FROM products 
        LEFT JOIN review ON products.id = review.product_id 
        JOIN brands ON products.brand_id = brands.id
        LEFT JOIN "user" ON "user".id = review.user_id
        ORDER BY created
        LIMIT 10`);
}

module.exports = {
    getLatestProducts,
};
