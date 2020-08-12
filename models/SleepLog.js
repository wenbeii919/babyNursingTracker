const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const sleepSchema = new Schema({
    _user: { type: ObjectId, ref: "User" },
    date: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    type: {
        type: String,
        default: 'Sleep'
    }
});

mongoose.model('sleep_logs', sleepSchema);