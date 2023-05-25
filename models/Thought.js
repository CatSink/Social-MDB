const {Schema, model} = require('mongoose');

const thoughtSchema = new Schema(
    {
      username: {
        type: String,
        defualt: true,
      },
      thoughts: {
        type: unique
      }
    }
)