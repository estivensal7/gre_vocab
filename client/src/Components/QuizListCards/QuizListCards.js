import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { 
        Card, 
        Button, 
        CardTitle,
        Row,
        Col 
} from 'reactstrap';
import { getQuizzesQuery } from '../../Queries/Queries';

class QuizListCards extends Component {

        displayQuizzes() {
                const data = this.props.data;

                if (data.loading) {
                        return ( <div>Loading Quizzes...</div> );
                } else {

                        let dataQuizzes = data.quizzes;
                        
                        //sorting incoming data so quizNames are in ascending order
                        dataQuizzes.sort(function(a,b) {
                                return a.quizName-b.quizName;
                        });
                        
                        console.log(dataQuizzes)
                        return dataQuizzes.map(quiz => {
                                return (
                                        <Col md={3} key= {quiz.id}>
                                                <Card body >
                                                        <CardTitle>Quiz { quiz.quizName }</CardTitle>
                                                        <Button>Ready!</Button>
                                                </Card>
                                        </Col>
                                );
                        })
                }
        }

        render() {
                return (
                        <div>
                                <Row>
                                        { this.displayQuizzes() }
                                </Row>
                        </div>
                )
        }
}

export default graphql(getQuizzesQuery)(QuizListCards);