const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accidentSchema = new Schema({
    description: {
        type: String
    },
    date: {
        type: Date
    },
    culprit: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
});

const Accident = mongoose.model("Accident", accidentSchema);

module.exports = Accident;