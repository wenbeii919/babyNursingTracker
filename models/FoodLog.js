const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const foodSchema = new Schema({
    _user: { type: ObjectId, ref: "User" },
    createdTime: { type: Date, default: Date.now },
    amount: Number,
    type: {
        type: String,
        default: 'Food'
    }
});

mongoose.model('food_logs', foodSchema);
