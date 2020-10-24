const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Todo\'s name required"],
            trim: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('todo', TodoSchema);