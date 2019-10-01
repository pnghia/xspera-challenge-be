const ProductDAL = require('./productDAL');

const getLatestProducts = async brandID => {
    const listBrands = await ProductDAL.getLatestProducts(brandID);
    if (!listBrands.length) {
        return { status: 'Not Found', data: [] };
    }
    return { status: 'Success', data: listBrands };
};

module.exports = {
    getLatestProducts,
};
