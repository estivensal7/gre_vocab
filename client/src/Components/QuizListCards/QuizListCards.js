import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { 
        Card, 
        Button, 
        CardTitle,
        Row,
        Col
} from 'reactstrap';
import { Link } from "react-router-dom";
import { getQuizzesQuery } from '../../Queries/Queries';
// import QuestionsModal from '../QuestionsModal/QuestionsModal';

class QuizListCards extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        modal: false,
                        quizName: null
                }

                this.showModal = this.showModal.bind(this);
                this.toggle = this.toggle.bind(this);
        }

        toggle() {
                this.setState({
                        modal: !this.state.modal,
                });
                // console.log(this.props);
                console.log(this.state.quizName);
        }

        showModal() {
                this.setState({
                        modal: true
                });
        }

        selectQuiz(props) {
                this.setState({
                        quizName: this.props.quizName
                });
        }

        displayQuizzes() {
                const data = this.props.data;

                if (data.loading) {
                        return ( <div>Loading Quizzes...</div> );
                } else {
                        // console.log(data);
                        let dataQuizzes = data.quizzes;
                        
                        //sorting incoming data so quizNames are in ascending order
                        dataQuizzes.sort(function(a,b) {
                                return a.quizName-b.quizName;
                        });
                        
                        // console.log(dataQuizzes)
                        return dataQuizzes.map(quiz => {
                                return (
                                        <Col md={3} key= {quiz.id}>
                                                <Card body >
                                                        <CardTitle>Quiz { quiz.quizName }</CardTitle>
                                                        <Button tag={Link} to={`/quiz-${quiz.quizName}`}>Ready!</Button>
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