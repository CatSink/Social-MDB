const {Schema, model} = require('mongoose');
const userSchema = new Schema(
 {
    username:{
     type: String,
     unique: true,
     required: true,
     trim: true
  },
    email: {
     type: String,
     required: true,
     unique: true,
    // _id: true find out how define valid email
   },
   thoughts:[
    {
     type: Schema.Type.ObjectId,
     ref: 'Thought'
     },
    ],
   friends : [
    {
     type: Schema.Type.ObjectId,
     ref: 'User'   
    }
   ]
},
{toJSON: {
    virtuals: true,
    },
    id: true,
}
);
userSchema
.virtual('friendCount').get(function () {
    return this.friends.length;
});
//.get(function () {
    //return `${this.username} ${this.email}`;
//})
//.set(function (v) {
    //const username = v.split(':')[0];
    //const email = v.split(':')[1];
    //this.set(username, email);
//});
const User = model('user',userSchema);

module.exports = User;

