const {Schema, model} = require('mongoose');

const thoughtSchema = new Schema(
    {
       thoughtText: {
        type: String,
        require: true,
        minLength: 1,
        maxLength: 280
      },
      username: {
        type: String,
        require: true, 
      },
      //thoughts Array _id values ref thoughts
      //friends Array _id values ref User
      createdAt: {
        type: Date,
        default: Date.now, //getter method for timestamp query
    },
      reactions: [reactionSchema], //nested doc for replies
  }  
)
  thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
  });

  const Thought = model('Thought', thoughtSchema);

  module.exports = Thought;