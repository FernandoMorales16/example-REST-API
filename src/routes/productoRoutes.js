const router = require('express-promise-router')();

const {
    index,
    newProduct,
    getProduct,
    replaceProduct,
    deleteProduct
} = require('../controllers/productoControllers');

router.get('/', index);
router.post('/', newProduct);

router.get('/:productId', getProduct);
router.put('/:productId', replaceProduct);
router.delete('/:productId', deleteProduct);

module.exports = router;