const Thought = require('../models/Thought');

async function getThoughts(req, res) {
    const thoughts = await Thought.find();

    res.json(thoughts);
}
async function createThought(req, res) {
    const newThought = await Thought.create(req.body);

    res.json(newThought);
}
async function getSingleThought(req, res) {
    const thought = await Thought.findOne({
        _id: req.params.thoughtId
    });
    if(!thought) {
        res.status(404).json({message:'Thought not found'});
    } else {
        res.json(thought);    
    }
}
async function updateThought(req,res) {
    const updatedThought = await Thought.findOneAndUpdate({
      _id: req.params.thoughtId  
    },
    req.body,
    {new: true});  
    
    res.json(updatedThought);
async function deleteThought(req,res) {
    const deletedThought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId
    }); 
    res.json(deletedThought);
}

module.exports = {
    createThought,
    getSingleThought,
    getThoughts,
    deleteThought
}

