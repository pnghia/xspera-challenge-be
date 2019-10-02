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
            COALESCE(review.comment, '') as "comment"
        FROM products 
            LEFT JOIN review ON (review.id = (SELECT id FROM review  ORDER BY id DESC LIMIT 1) AND review.product_id = products.id)
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
        COALESCE(review.comment, '') as "comment"
    FROM products 
        LEFT JOIN review ON (review.id = (SELECT id FROM review  ORDER BY id DESC LIMIT 1) AND review.product_id = products.id)
        JOIN brands ON products.brand_id = brands.id
        LEFT JOIN "user" ON "user".id = review.user_id
        ORDER BY created
        LIMIT 10`);
}

function getProductByID(productID) {
    if (productID) {
        return db.query(
            `SELECT 
            products.id AS "productID", 
            products.product_name AS "productName", 
            products.description, 
            brands.name AS "brandName",
            "user".username,
            COALESCE(review.comment, '') as "comment"
        FROM products 
            LEFT JOIN review ON (review.id = (SELECT id FROM review  ORDER BY id DESC LIMIT 1) AND review.product_id = products.id)
            JOIN brands ON products.brand_id = brands.id
            LEFT JOIN "user" ON "user".id = review.user_id
        WHERE products.id = $[productID]
            ORDER BY created
            LIMIT 10`,
            {
                productID,
            },
        );
    }
    return {};
}

module.exports = {
    getLatestProducts,
    getProductByID,
};
