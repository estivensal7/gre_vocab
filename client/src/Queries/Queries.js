import { gql } from 'apollo-boost';

const getQuizzesQuery = gql`
        {
                quizzes {
                        id
                        quizName
                }
        }
`

const getWordsQuery = gql`
{
        words {
                id
                word
                definition
                quizId
                questionNumber
                randomDefNumber
                quiz{
                        id
                        quizName
                }
        }
}
`

const getSingleQuiz = gql`
        query getSingleQuizQuery($id: String!) {
                quiz (id: $id) {
                        id
                        quizName
                        words {
                                word
                                definition
                        }
                }
        }
`

export { getQuizzesQuery, getWordsQuery, getSingleQuiz };