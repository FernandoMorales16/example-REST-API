const router = require('express-promise-router')();

const {
    index,
    newUser,
    getUser,
    replaceUser,
    deleteUser
} = require('../controllers/userControllers');

router.get('/', index);
router.post('/', newUser)

router.get('/:userId', getUser);
router.put('/:userId', replaceUser);
router.delete('/:userId', deleteUser);

module.exports = router;