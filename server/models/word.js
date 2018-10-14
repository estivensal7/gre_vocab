const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
        word: String,
        definition: String,
        quizId: String,
        questionNumber: String,
        randomDefNumber: String
});

module.exports = mongoose.model('Word', wordSchema);