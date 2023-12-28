require('dotenv').config();
const mongoose = require('mongoose')
const mongoDBConnection = mongoose.connect(`mongodb+srv://singh-csm:GIUPM5681K@singh-csm.nmfw5jk.mongodb.net/test-travelious`).then(()=>console.log("database connected!!!"))
module.exports = mongoDBConnection
