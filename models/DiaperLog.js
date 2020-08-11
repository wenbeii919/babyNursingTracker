const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const diaperSchema = new Schema({
    _user: { type: ObjectId, ref: "User" },
    createdTime: { type: Date, default: Date.now },
    pooped: Boolean,
    type: {
        type: String,
        default: 'Diaper'
    }
});

mongoose.model('diaper_logs', diaperSchema);
