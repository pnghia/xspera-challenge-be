const ProductDAL = require('./productsDAL');

const getLatestProducts = async brandID => {
    const listBrands = await ProductDAL.getLatestProducts(brandID);
    if (!listBrands.length) {
        return { status: 'Not Found', data: [] };
    }
    return { status: 'Success', data: listBrands };
};

const getProductById = async productID => {
    const product = await ProductDAL.getProductByID(productID);
    if (!product.length) {
        return { status: 'Not Found', data: {} };
    }
    return { status: 'Success', data: product };
};

module.exports = {
    getLatestProducts,
    getProductById,
};
