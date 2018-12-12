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

class StudyCards extends Component {

        displaySections() {
                const data = this.props.data;

                if (data.loading) {
                        return ( <div>Loading Sections...</div> );
                } else {
                        // console.log(data);
                        let dataSections = data.quizzes;
                        
                        //sorting incoming data so quizNames are in ascending order
                        dataSections.sort(function(a,b) {
                                return a.quizName-b.quizName;
                        });
                        
                        // console.log(dataQuizzes)
                        return dataSections.map(section => {
                                return (
                                        <Col md={3} key= {section.id}>
                                                <Card body >
                                                        <CardTitle>Section { section.quizName }</CardTitle>
                                                        <Button tag={Link} to={`/section-${section.quizName}`}>Ready!</Button>
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
                                        { this.displaySections() }
                                </Row>
                        </div>
                )
        }
}

export default graphql(getQuizzesQuery)(StudyCards);