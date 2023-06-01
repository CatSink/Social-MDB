const {User} = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((users)=> res.json(users))
        .catch((err)=> res.status(500).json(err));

},
getSingleUser(req, res) {
    User.findOne({_id: req.params.userId})
    .select('-__v')
     .then(user => 
        !user
        ? res.status(404).json({message: 'User not found'})
        :res.json(user)
    )
    .catch((err)=> res.status(500).json(err));
},
createUser(req, res) {
    User.create(req.body)
    .then((User) => res.json(User))
    .catch((err)=> res.status(500).json(err));
 },
}; 
async function deleteUser(req, res) {
    const deleteUser = await User.findOneAndDelete(
        {_id: req.params.userId
    });
};
async function updateUser(req, res) {
 const updatedUser = await User.findOneAndByIdAndUpdate( 
    {_id: req.params.userId},
    req.body,
    {new: true});

    res.json(updatedUser);
}

async function addUserFriend(req, res) {
    const newFriend = await User.findOneAndByIdAndUpdate({
     _id: req.params.userId
    },
    req.body,
    {new: true});

    res.json(newFriend);
};
async function deleteUserFriend(req, res) {
    const deletedUserFriend = await User.findOneAndByIdAndUpdate({
        _id:req.params.userId
    });
    res.json(deletedUserFriend);
}; 
module.exports = {
    deleteUserFriend,
    addUserFriend,
    deleteUser,
    updateUser,

}      