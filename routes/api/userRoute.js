const router = require('express').Router;


router.route('/').get(getUser).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
