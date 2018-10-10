const graphql = require('graphql');
const _ = require('lodash');
const Word = require('../models/word');
const Quiz = require('../models/quiz');

const { 
        GraphQLObjectType, 
        GraphQLString,
        GraphQLSchema,
        GraphQLID,
        GraphQLList,
        GraphQLNonNull,
        GraphQLInt
} = graphql;

const WordType = new GraphQLObjectType({
        name: 'Word',
        fields: () => ({
                id: { type: GraphQLID },
                word: { type: GraphQLString },
                definition: { type: GraphQLString },
                quizId: { type: GraphQLString },
                quiz: {
                        type: QuizType,
                        resolve(parent, args){
                                return Quiz.findById(parent.quizId);
                        }
                }
        })
});

const QuizType = new GraphQLObjectType({
        name: 'Quiz',
        fields: () => ({
                id: { type: GraphQLID },
                quizName: { type: GraphQLInt },
                words: {
                        type: new GraphQLList(WordType),
                        resolve(parent, args) {
                                return Word.find({quizId: parent.id});
                        }
                }
        })
});

const RootQuery = new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
                word: {
                        type: WordType,
                        args: { id: { type: GraphQLID } },
                        resolve(parent, args) {
                                //code to get data from db / other source
                                // return _.find(words, { id: args.id });
                                return Word.findById(args.id);
                        }
                },

                quiz: {
                        type: QuizType,
                        args: { id: { type: GraphQLID } },
                        resolve(parent, args) {
                                //code to get data from db / other source
                                return Quiz.findById(args.id);
                        }
                },

                words: {
                        type: new GraphQLList(WordType),
                        resolve(parent, args) {
                                // return words
                                return Word.find({});
                        }
                }
        }
});

const Mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
                addWord: {
                        type: WordType,
                        args: {
                                word: { type: new GraphQLNonNull(GraphQLString) },
                                definition: { type: new GraphQLNonNull(GraphQLString) },
                                quizId: { type: new GraphQLNonNull(GraphQLString) }
                        },
                        resolve(parent, args) {
                                let word = new Word({
                                        word: args.word,
                                        definition: args.definition
                                })
                                return word.save();
                        }
                }
        }
})

module.exports = new GraphQLSchema({
        query: RootQuery,
        mutation: Mutation
}); 