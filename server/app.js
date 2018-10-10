const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

//connect to mLab database
mongoose.connect('mongodb://estivensal7:Varsity94@ds223343.mlab.com:23343/gre_vocab');
mongoose.connection.once('open', () => {
	console.log('connected to database.');
});

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening on Port 4000');
});