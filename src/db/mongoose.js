// getting-started.js
const mongoose = require('mongoose');

db().catch(err => console.log(err));

async function db() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Redux');
    console.log("connect DB success")
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
module.exports = db