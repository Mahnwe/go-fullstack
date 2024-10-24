const mongoose = require('mongoose');


const thingSchema = mongoose.Schema({
    title:{type : String, require : true},
    description:{type : String, require : true},
    imageUrl: { type: String, required: true },
    userId: { type: String, required: true },
    price: { type: Number, required: true },
});

module.exports = mongoose.model('Thing', thingSchema);