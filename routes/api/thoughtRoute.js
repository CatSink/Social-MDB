const router = require('express').Router();
const thoughtCo = require('../controllers/ThoughtCo');

router.route('/')
.get(thoughtCo.getThoughts)
.post(thoughtCo.createThought);

router.route('/:thoughtId')
 .get(thoughtCo.getSingleThought)
 .put(thoughtCo.updateSingleThought)
 .delete(thoughtCo.deleteThought);
 
 module.exports = router