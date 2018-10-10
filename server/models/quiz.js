const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
        quizName: Number
});

module.exports = mongoose.model('Quiz', quizSchema);