const {Schema, model} = require('mongoose');
const userSchema = new Schema(
    {
        username: String,
        email: String,
        thought: [
            {
                type: Schema.Type.ObjectId,
                ref: 'thought',
            },
        ],
    },
    {toJSON: {
        virtuals: true,
    },
    id: true,
}
);
userSchema
.virtual('username')
.get(function () {
    return `${this.username} ${this.email}`;
})
.set(function (v) {
    const username = v.split(':')[0];
    const email = v.split(':')[1];
    this.set(username, email);
});
const User = model('user',userSchema);

module.exports = User;

