import { gql } from 'apollo-boost';

const getQuizzesQuery = gql`
        {
                quizzes {
                        id
                        quizName
                        words {
                                id
                                word
                                definition
                                questionNumber
                                randomDefOne
                                randomDefTwo
                                randomDefThree
                        }
                }
        }
`;

const getWordsQuery = gql`
{
        words {
                id
                word
                definition
                quizId
                questionNumber
                randomDefOne
                randomDefTwo
                randomDefThree
                quiz{
                        id
                        quizName
                }
        }
}
`;

export { getQuizzesQuery, getWordsQuery };