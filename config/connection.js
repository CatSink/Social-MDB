const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/userdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


module.exports = mongoose.connection;