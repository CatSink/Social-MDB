const connection = require('config\connection.js');
const {User} = require('models');
const userData = require('utils\data.js');

connection.on('error', (err)=> err);

connection.once('open', async ()=> {
    console.log('Connection established');

    await User.deleteMany({});
    await User.collection.insertMany(userData);

    console.table(userData);
    console.info('Seeding Success!');
    process.exit(0);

})