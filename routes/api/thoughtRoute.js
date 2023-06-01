const router = require('express').Router();
const { getThoughts, getSingleThought, createThought, updateThought, deleteThought } 
= require('controllers\ThoughtCo.js');

router.route('/')
.get(thoughtCo.getThoughts)
.post(thoughtCo.createThought);

router.route('/:thoughtId')
 .get(thoughtCo.getSingleThought)
 .put(thoughtCo.updateSingleThought)
 .delete(thoughtCo.deleteThought);
 
 module.exports = router;