const router = require('express').Router;
const {getUser,createUser,updateUser,deleteUser,addUserFriend,deleteUserFriend} 
= require('controllers\UserCo.js');

router.route('/').get(getUser).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);
router.route('/:userId/friends').post(addUserFriend);
router.route('/:userId/friends/:friendsId').delete(deleteUserFriend);

module.exports = router;
