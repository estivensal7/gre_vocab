import React from 'react';
import { 
        Jumbotron, 
        Container, 
        Card, 
        Button, 
        CardHeader, 
        CardBody,
        CardText,
        Row,
        Col 
} from 'reactstrap';

const HomeOptionsContainer = (props) => {
        return (
                <div>
                        <Jumbotron fluid>
                                <Container fluid>
                                        <Row>
                                                {/* Study card which holds link to the page */}
                                                <Col md={{size: 5, offset: 1}}>
                                                        <Card>
                                                                <CardHeader>Study</CardHeader>
                                                                <CardBody>
                                                                        <CardText>Study each quiz's words and prep before even taking the practice quiz!</CardText>
                                                                        <Button>Study!</Button>
                                                                </CardBody>
                                                        </Card>
                                                </Col>
                                                {/* Quizzes card which holds link to the page */}
                                                <Col md={{size: 5}}>
                                                        <Card>
                                                                <CardHeader>Quizzes</CardHeader>
                                                                <CardBody>
                                                                        <CardText>Test your vocab skills!</CardText>
                                                                        <Button>Take A Quiz!</Button>
                                                                </CardBody>
                                                        </Card>
                                                </Col>
                                        </Row>
                                </Container>
                        </Jumbotron>
                </div>
        );
};

export default HomeOptionsContainer;