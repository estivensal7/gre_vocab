import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { 
        Row,
        Col, 
        TabContent, 
        TabPane,
        Button,
        Form, 
        FormGroup, 
        Label, 
        Input,
        Alert
} from 'reactstrap';

import { Link } from "react-router-dom";

import { getQuizzesQuery } from '../../Queries/Queries';

import './QuizTabs.css';

class QuizThirtyFive extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        activeTab: '1',
                        userAnswers: '',
                        correct: 0,
                        correctAlert: false,
                        incorrectAlert: false,
                        checkButton: false,
                        nextButton: true
                }

                this.toggle = this.toggle.bind(this);
                this.handleOptionChange = this.handleOptionChange.bind(this);
                this.checkAnswer = this.checkAnswer.bind(this);
                this.retakeQuiz = this.retakeQuiz.bind(this);
        }

        toggle(tab) {
                if (this.state.activeTab !== tab) {
                        this.setState({
                                activeTab: tab,
                                userAnswers: ''
                        });

                        if (this.state.correctAlert === true) this.setState({ correctAlert: false});
                        if (this.state.incorrectAlert === true) this.setState({ incorrectAlert: false});
                        if (this.state.checkButton === true) this.setState({ checkButton: false });
                        if (this.state.nextButton === false) this.setState({ nextButton: true });
                }
        }

        handleOptionChange(e) {
                this.setState({
                        userAnswers: e.target.value
                });

                console.log(this.state);
        }

        checkAnswer(e) {
                e.preventDefault();
                this.forceUpdate();
                if (e.target.value === this.state.userAnswers) {
                        this.setState({
                                correctAlert: true,
                                correct: this.state.correct + 1
                        });
                        console.log(this.state.correct);
                } else {
                        this.setState({
                                incorrectAlert: true
                        })
                }

                this.setState({
                        checkButton: true,
                        nextButton: false
                })
        }
        
        retakeQuiz() {
                this.setState({
                        activeTab: '1',
                        userAnswers: '',
                        correct: 0,
                        correctAlert: false,
                        incorrectAlert: false,
                        checkButton: false,
                        nextButton: true
                });
        }

        render() {
                let data = this.props.data;
                let dataQuizzes = data.quizzes;
                let sortedDataQuizzes;
                
                if (data.loading) {
                        return ( <div>Loading Questions...</div> );
                } else {
                        sortedDataQuizzes = dataQuizzes.sort(function(a,b) {
                                return a.quizName-b.quizName;
                        })
                        console.log(sortedDataQuizzes[34]);
                }
                return (
			<div>
                                <Row>
                                        <Col md={{size: 4, offset: 4}}>
                                                <TabContent activeTab={this.state.activeTab}>

                                                        {/* Question 1 */}
                                                        <TabPane tabId="1" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                                <h1>Question: 1 of 25</h1>

                                                                                <Form>
                                                                                        <FormGroup tag="fieldset">

                                                                                                {/* Correct Alert */}
                                                                                                <Alert 
                                                                                                        color="success" 
                                                                                                        isOpen={this.state.correctAlert}
                                                                                                >
                                                                                                        Correct! Click "next question" to move on.
                                                                                                </Alert>

                                                                                                {/* Incorrect Alert */}
                                                                                                <Alert 
                                                                                                        color="danger" 
                                                                                                        isOpen={this.state.incorrectAlert}
                                                                                                >
                                                                                                        Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[0].definition}"
                                                                                                </Alert>

                                                                                                <legend>{sortedDataQuizzes[34].words[0].word}</legend>


                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[0].randomDefOne}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[0].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                                {sortedDataQuizzes[34].words[0].randomDefOne}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                                                                                        <FormGroup check className="question_input" value={sortedDataQuizzes[34].words[0].definition}>
                                                                                                                <Label check >
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[0].definition}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[0].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[0].definition}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                

                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[0].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[0].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[0].randomDefTwo}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[0].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[0].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[0].randomDefThree}
                                                                                                                </Label>
                                                                                                        </FormGroup>

                                                                                        </FormGroup>
                                                                                </Form>

                                                                                {/* Check Answer Button */}
                                                                                <Button 
                                                                                        onClick={this.checkAnswer} 
                                                                                        value={sortedDataQuizzes[34].words[0].definition}
                                                                                        disabled={this.state.checkButton}
                                                                                > 
                                                                                        Check Answer 
                                                                                </Button>

                                                                                {/* Next Question Button */}
                                                                                <Button 
                                                                                        onClick={() => this.toggle('2')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                                </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Question 2 */}
                                                        <TabPane tabId="2" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                        <h1>Question: 2 of 25</h1>

                                                                        <Form>
                                                                                <FormGroup tag="fieldset">

                                                                                        {/* Correct Alert */}
                                                                                        <Alert 
                                                                                                color="success" 
                                                                                                isOpen={this.state.correctAlert}
                                                                                        >
                                                                                                Correct! Click "next question" to move on.
                                                                                        </Alert>

                                                                                        {/* Incorrect Alert */}
                                                                                        <Alert 
                                                                                                color="danger" 
                                                                                                isOpen={this.state.incorrectAlert}
                                                                                        >
                                                                                                Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[1].definition}"
                                                                                        </Alert>

                                                                                        <legend>{sortedDataQuizzes[34].words[1].word}</legend>


                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[1].randomDefOne} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[1].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[1].randomDefOne}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[1].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[1].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[1].randomDefThree}
                                                                                                        </Label>
                                                                                                </FormGroup>
                                                                                                

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[1].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[1].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[1].randomDefTwo}
                                                                                                        </Label>
                                                                                                </FormGroup>
                                                                                                
                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                        <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[1].definition} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[1].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[1].definition}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                </FormGroup>
                                                                        </Form>

                                                                        {/* Check Answer Button */}
                                                                        <Button 
                                                                                onClick={this.checkAnswer} 
                                                                                value={sortedDataQuizzes[34].words[1].definition}
                                                                                disabled={this.state.checkButton}
                                                                        > 
                                                                                Check Answer 
                                                                        </Button>

                                                                        {/* Next Question Button */}
                                                                        <Button 
                                                                                        onClick={() => this.toggle('3')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                        </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Question 3 */}
                                                        <TabPane tabId="3" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                        <h1>Question: 3 of 25</h1>

                                                                        <Form>
                                                                                <FormGroup tag="fieldset">

                                                                                        {/* Correct Alert */}
                                                                                        <Alert 
                                                                                                color="success" 
                                                                                                isOpen={this.state.correctAlert}
                                                                                        >
                                                                                                Correct! Click "next question" to move on.
                                                                                        </Alert>

                                                                                        {/* Incorrect Alert */}
                                                                                        <Alert 
                                                                                                color="danger" 
                                                                                                isOpen={this.state.incorrectAlert}
                                                                                        >
                                                                                                Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[2].definition}"
                                                                                        </Alert>

                                                                                        <legend>{sortedDataQuizzes[34].words[2].word}</legend>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                        <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[2].definition} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[2].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[2].definition}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[2].randomDefOne} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[2].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[2].randomDefOne}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[2].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[2].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[2].randomDefThree}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[2].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[2].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[2].randomDefTwo}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                </FormGroup>
                                                                        </Form>

                                                                        {/* Check Answer Button */}
                                                                        <Button 
                                                                                onClick={this.checkAnswer} 
                                                                                value={sortedDataQuizzes[34].words[2].definition}
                                                                                disabled={this.state.checkButton}
                                                                        > 
                                                                                Check Answer 
                                                                        </Button>

                                                                        {/* Next Question Button */}
                                                                        <Button 
                                                                                        onClick={() => this.toggle('4')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                        </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Question 4 */}
                                                        <TabPane tabId="4" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                                <h1>Question: 4 of 25</h1>

                                                                                <Form>
                                                                                        <FormGroup tag="fieldset">

                                                                                                {/* Correct Alert */}
                                                                                                <Alert 
                                                                                                        color="success" 
                                                                                                        isOpen={this.state.correctAlert}
                                                                                                >
                                                                                                        Correct! Click "next question" to move on.
                                                                                                </Alert>

                                                                                                {/* Incorrect Alert */}
                                                                                                <Alert 
                                                                                                        color="danger" 
                                                                                                        isOpen={this.state.incorrectAlert}
                                                                                                >
                                                                                                        Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[3].definition}"
                                                                                                </Alert>

                                                                                                <legend>{sortedDataQuizzes[34].words[3].word}</legend>


                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[3].randomDefOne}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[3].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                                {sortedDataQuizzes[34].words[3].randomDefOne}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                

                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[3].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[3].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[3].randomDefTwo}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                                                                                        <FormGroup check className="question_input" value={sortedDataQuizzes[34].words[3].definition}>
                                                                                                                <Label check >
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[3].definition}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[3].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[3].definition}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[3].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[3].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[3].randomDefThree}
                                                                                                                </Label>
                                                                                                        </FormGroup>

                                                                                        </FormGroup>
                                                                                </Form>

                                                                                {/* Check Answer Button */}
                                                                                <Button 
                                                                                        onClick={this.checkAnswer} 
                                                                                        value={sortedDataQuizzes[34].words[3].definition}
                                                                                        disabled={this.state.checkButton}
                                                                                > 
                                                                                        Check Answer 
                                                                                </Button>

                                                                                {/* Next Question Button */}
                                                                                <Button 
                                                                                        onClick={() => this.toggle('5')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                                </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Question 5*/}
                                                        <TabPane tabId="5" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                        <h1>Question: 5 of 25</h1>

                                                                        <Form>
                                                                                <FormGroup tag="fieldset">

                                                                                        {/* Correct Alert */}
                                                                                        <Alert 
                                                                                                color="success" 
                                                                                                isOpen={this.state.correctAlert}
                                                                                        >
                                                                                                Correct! Click "next question" to move on.
                                                                                        </Alert>

                                                                                        {/* Incorrect Alert */}
                                                                                        <Alert 
                                                                                                color="danger" 
                                                                                                isOpen={this.state.incorrectAlert}
                                                                                        >
                                                                                                Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[4].definition}"
                                                                                        </Alert>

                                                                                        <legend>{sortedDataQuizzes[34].words[4].word}</legend>


                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[4].randomDefOne} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[4].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[4].randomDefOne}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                        <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[4].definition} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[4].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[4].definition}
                                                                                                        </Label>
                                                                                                </FormGroup>
                                                                                                
                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[4].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[4].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[4].randomDefThree}
                                                                                                        </Label>
                                                                                                </FormGroup>
                                                                                                

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[4].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[4].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[4].randomDefTwo}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                </FormGroup>
                                                                        </Form>

                                                                        {/* Check Answer Button */}
                                                                        <Button 
                                                                                onClick={this.checkAnswer} 
                                                                                value={sortedDataQuizzes[34].words[4].definition}
                                                                                disabled={this.state.checkButton}
                                                                        > 
                                                                                Check Answer 
                                                                        </Button>

                                                                        {/* Next Question Button */}
                                                                        <Button 
                                                                                        onClick={() => this.toggle('6')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                        </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Question 6 */}
                                                        <TabPane tabId="6" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                        <h1>Question: 6 of 25</h1>

                                                                        <Form>
                                                                                <FormGroup tag="fieldset">

                                                                                        {/* Correct Alert */}
                                                                                        <Alert 
                                                                                                color="success" 
                                                                                                isOpen={this.state.correctAlert}
                                                                                        >
                                                                                                Correct! Click "next question" to move on.
                                                                                        </Alert>

                                                                                        {/* Incorrect Alert */}
                                                                                        <Alert 
                                                                                                color="danger" 
                                                                                                isOpen={this.state.incorrectAlert}
                                                                                        >
                                                                                                Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[5].definition}"
                                                                                        </Alert>

                                                                                        <legend>{sortedDataQuizzes[34].words[5].word}</legend>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                        <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[5].definition} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[5].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[5].definition}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[5].randomDefOne} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[5].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[5].randomDefOne}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[5].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[5].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[5].randomDefThree}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[5].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[5].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[5].randomDefTwo}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                </FormGroup>
                                                                        </Form>

                                                                        {/* Check Answer Button */}
                                                                        <Button 
                                                                                onClick={this.checkAnswer} 
                                                                                value={sortedDataQuizzes[34].words[5].definition}
                                                                                disabled={this.state.checkButton}
                                                                        > 
                                                                                Check Answer 
                                                                        </Button>

                                                                        {/* Next Question Button */}
                                                                        <Button 
                                                                                        onClick={() => this.toggle('7')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                        </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>
                                                
                                                        {/* Question 7 */}
                                                        <TabPane tabId="7" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                                <h1>Question: 7 of 25</h1>

                                                                                <Form>
                                                                                        <FormGroup tag="fieldset">

                                                                                                {/* Correct Alert */}
                                                                                                <Alert 
                                                                                                        color="success" 
                                                                                                        isOpen={this.state.correctAlert}
                                                                                                >
                                                                                                        Correct! Click "next question" to move on.
                                                                                                </Alert>

                                                                                                {/* Incorrect Alert */}
                                                                                                <Alert 
                                                                                                        color="danger" 
                                                                                                        isOpen={this.state.incorrectAlert}
                                                                                                >
                                                                                                        Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[6].definition}"
                                                                                                </Alert>

                                                                                                <legend>{sortedDataQuizzes[34].words[6].word}</legend>


                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[6].randomDefOne}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[6].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                                {sortedDataQuizzes[34].words[6].randomDefOne}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                

                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[6].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[6].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[6].randomDefTwo}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[6].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[6].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[6].randomDefThree}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                                                                                        <FormGroup check className="question_input" value={sortedDataQuizzes[34].words[6].definition}>
                                                                                                                <Label check >
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[6].definition}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[6].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[6].definition}
                                                                                                                </Label>
                                                                                                        </FormGroup>

                                                                                        </FormGroup>
                                                                                </Form>

                                                                                {/* Check Answer Button */}
                                                                                <Button 
                                                                                        onClick={this.checkAnswer} 
                                                                                        value={sortedDataQuizzes[34].words[6].definition}
                                                                                        disabled={this.state.checkButton}
                                                                                > 
                                                                                        Check Answer 
                                                                                </Button>

                                                                                {/* Next Question Button */}
                                                                                <Button 
                                                                                        onClick={() => this.toggle('8')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                                </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Question 8 */}
                                                        <TabPane tabId="8" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                        <h1>Question: 8 of 25</h1>

                                                                        <Form>
                                                                                <FormGroup tag="fieldset">

                                                                                        {/* Correct Alert */}
                                                                                        <Alert 
                                                                                                color="success" 
                                                                                                isOpen={this.state.correctAlert}
                                                                                        >
                                                                                                Correct! Click "next question" to move on.
                                                                                        </Alert>

                                                                                        {/* Incorrect Alert */}
                                                                                        <Alert 
                                                                                                color="danger" 
                                                                                                isOpen={this.state.incorrectAlert}
                                                                                        >
                                                                                                Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[7].definition}"
                                                                                        </Alert>

                                                                                        <legend>{sortedDataQuizzes[34].words[7].word}</legend>


                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[7].randomDefOne} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[7].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[7].randomDefOne}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[7].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[7].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[7].randomDefThree}
                                                                                                        </Label>
                                                                                                </FormGroup>
                                                                                                
                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                        <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[7].definition} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[7].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[7].definition}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[7].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[7].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[7].randomDefTwo}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                </FormGroup>
                                                                        </Form>

                                                                        {/* Check Answer Button */}
                                                                        <Button 
                                                                                onClick={this.checkAnswer} 
                                                                                value={sortedDataQuizzes[34].words[7].definition}
                                                                                disabled={this.state.checkButton}
                                                                        > 
                                                                                Check Answer 
                                                                        </Button>

                                                                        {/* Next Question Button */}
                                                                        <Button 
                                                                                        onClick={() => this.toggle('9')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                        </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Question 9 */}
                                                        <TabPane tabId="9" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                        <h1>Question: 9 of 25</h1>

                                                                        <Form>
                                                                                <FormGroup tag="fieldset">

                                                                                        {/* Correct Alert */}
                                                                                        <Alert 
                                                                                                color="success" 
                                                                                                isOpen={this.state.correctAlert}
                                                                                        >
                                                                                                Correct! Click "next question" to move on.
                                                                                        </Alert>

                                                                                        {/* Incorrect Alert */}
                                                                                        <Alert 
                                                                                                color="danger" 
                                                                                                isOpen={this.state.incorrectAlert}
                                                                                        >
                                                                                                Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[8].definition}"
                                                                                        </Alert>

                                                                                        <legend>{sortedDataQuizzes[34].words[8].word}</legend>


                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[8].randomDefOne} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[8].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[8].randomDefOne}
                                                                                                        </Label>
                                                                                                </FormGroup>
                                                                                                
                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                        <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[8].definition} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[8].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[8].definition}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[8].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[8].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[8].randomDefThree}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[8].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[8].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[8].randomDefTwo}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                </FormGroup>
                                                                        </Form>

                                                                        {/* Check Answer Button */}
                                                                        <Button 
                                                                                onClick={this.checkAnswer} 
                                                                                value={sortedDataQuizzes[34].words[8].definition}
                                                                                disabled={this.state.checkButton}
                                                                        > 
                                                                                Check Answer 
                                                                        </Button>

                                                                        {/* Next Question Button */}
                                                                        <Button 
                                                                                        onClick={() => this.toggle('10')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                        </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>
                                                
                                                        {/* Question 10 */}
                                                        <TabPane tabId="10" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                                <h1>Question: 10 of 25</h1>

                                                                                <Form>
                                                                                        <FormGroup tag="fieldset">

                                                                                                {/* Correct Alert */}
                                                                                                <Alert 
                                                                                                        color="success" 
                                                                                                        isOpen={this.state.correctAlert}
                                                                                                >
                                                                                                        Correct! Click "next question" to move on.
                                                                                                </Alert>

                                                                                                {/* Incorrect Alert */}
                                                                                                <Alert 
                                                                                                        color="danger" 
                                                                                                        isOpen={this.state.incorrectAlert}
                                                                                                >
                                                                                                        Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[9].definition}"
                                                                                                </Alert>

                                                                                                <legend>{sortedDataQuizzes[34].words[9].word}</legend>


                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[9].randomDefOne}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[9].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                                {sortedDataQuizzes[34].words[9].randomDefOne}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                

                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[9].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[9].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[9].randomDefTwo}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                                                                                        <FormGroup check className="question_input" value={sortedDataQuizzes[34].words[9].definition}>
                                                                                                                <Label check >
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[9].definition}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[9].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[9].definition}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[9].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[9].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[9].randomDefThree}
                                                                                                                </Label>
                                                                                                        </FormGroup>

                                                                                        </FormGroup>
                                                                                </Form>

                                                                                {/* Check Answer Button */}
                                                                                <Button 
                                                                                        onClick={this.checkAnswer} 
                                                                                        value={sortedDataQuizzes[34].words[9].definition}
                                                                                        disabled={this.state.checkButton}
                                                                                > 
                                                                                        Check Answer 
                                                                                </Button>

                                                                                {/* Next Question Button */}
                                                                                <Button 
                                                                                        onClick={() => this.toggle('11')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                                </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Question 11 */}
                                                        <TabPane tabId="11" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                        <h1>Question: 11 of 25</h1>

                                                                        <Form>
                                                                                <FormGroup tag="fieldset">

                                                                                        {/* Correct Alert */}
                                                                                        <Alert 
                                                                                                color="success" 
                                                                                                isOpen={this.state.correctAlert}
                                                                                        >
                                                                                                Correct! Click "next question" to move on.
                                                                                        </Alert>

                                                                                        {/* Incorrect Alert */}
                                                                                        <Alert 
                                                                                                color="danger" 
                                                                                                isOpen={this.state.incorrectAlert}
                                                                                        >
                                                                                                Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[10].definition}"
                                                                                        </Alert>

                                                                                        <legend>{sortedDataQuizzes[34].words[10].word}</legend>


                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                        <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[10].definition} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[10].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[10].definition}
                                                                                                        </Label>
                                                                                                </FormGroup>
                                                                                                
                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[10].randomDefOne} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[10].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[10].randomDefOne}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[10].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[10].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[10].randomDefThree}
                                                                                                        </Label>
                                                                                                </FormGroup>
                                                                                                

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[10].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[10].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[10].randomDefTwo}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                </FormGroup>
                                                                        </Form>

                                                                        {/* Check Answer Button */}
                                                                        <Button 
                                                                                onClick={this.checkAnswer} 
                                                                                value={sortedDataQuizzes[34].words[10].definition}
                                                                                disabled={this.state.checkButton}
                                                                        > 
                                                                                Check Answer 
                                                                        </Button>

                                                                        {/* Next Question Button */}
                                                                        <Button 
                                                                                        onClick={() => this.toggle('12')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                        </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Question 12 */}
                                                        <TabPane tabId="12" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                        <h1>Question: 12 of 25</h1>

                                                                        <Form>
                                                                                <FormGroup tag="fieldset">

                                                                                        {/* Correct Alert */}
                                                                                        <Alert 
                                                                                                color="success" 
                                                                                                isOpen={this.state.correctAlert}
                                                                                        >
                                                                                                Correct! Click "next question" to move on.
                                                                                        </Alert>

                                                                                        {/* Incorrect Alert */}
                                                                                        <Alert 
                                                                                                color="danger" 
                                                                                                isOpen={this.state.incorrectAlert}
                                                                                        >
                                                                                                Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[11].definition}"
                                                                                        </Alert>

                                                                                        <legend>{sortedDataQuizzes[34].words[11].word}</legend>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                        <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[11].definition} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[11].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[11].definition}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[11].randomDefOne} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[11].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[11].randomDefOne}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[11].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[11].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[11].randomDefThree}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[11].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[11].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[11].randomDefTwo}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                </FormGroup>
                                                                        </Form>

                                                                        {/* Check Answer Button */}
                                                                        <Button 
                                                                                onClick={this.checkAnswer} 
                                                                                value={sortedDataQuizzes[34].words[11].definition}
                                                                                disabled={this.state.checkButton}
                                                                        > 
                                                                                Check Answer 
                                                                        </Button>

                                                                        {/* Next Question Button */}
                                                                        <Button 
                                                                                        onClick={() => this.toggle('13')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                        </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>
                                                
                                                        {/* Question 13 */}
                                                        <TabPane tabId="13" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                                <h1>Question: 13 of 25</h1>

                                                                                <Form>
                                                                                        <FormGroup tag="fieldset">

                                                                                                {/* Correct Alert */}
                                                                                                <Alert 
                                                                                                        color="success" 
                                                                                                        isOpen={this.state.correctAlert}
                                                                                                >
                                                                                                        Correct! Click "next question" to move on.
                                                                                                </Alert>

                                                                                                {/* Incorrect Alert */}
                                                                                                <Alert 
                                                                                                        color="danger" 
                                                                                                        isOpen={this.state.incorrectAlert}
                                                                                                >
                                                                                                        Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[12].definition}"
                                                                                                </Alert>

                                                                                                <legend>{sortedDataQuizzes[34].words[12].word}</legend>


                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[12].randomDefOne}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[12].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                                {sortedDataQuizzes[34].words[12].randomDefOne}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                                                                                        <FormGroup check className="question_input" value={sortedDataQuizzes[34].words[12].definition}>
                                                                                                                <Label check >
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[12].definition}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[12].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[12].definition}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                

                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[12].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[12].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[12].randomDefTwo}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[12].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[12].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[12].randomDefThree}
                                                                                                                </Label>
                                                                                                        </FormGroup>

                                                                                        </FormGroup>
                                                                                </Form>

                                                                                {/* Check Answer Button */}
                                                                                <Button 
                                                                                        onClick={this.checkAnswer} 
                                                                                        value={sortedDataQuizzes[34].words[12].definition}
                                                                                        disabled={this.state.checkButton}
                                                                                > 
                                                                                        Check Answer 
                                                                                </Button>

                                                                                {/* Next Question Button */}
                                                                                <Button 
                                                                                        onClick={() => this.toggle('14')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                                </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Question 14 */}
                                                        <TabPane tabId="14" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                        <h1>Question: 14 of 25</h1>

                                                                        <Form>
                                                                                <FormGroup tag="fieldset">

                                                                                        {/* Correct Alert */}
                                                                                        <Alert 
                                                                                                color="success" 
                                                                                                isOpen={this.state.correctAlert}
                                                                                        >
                                                                                                Correct! Click "next question" to move on.
                                                                                        </Alert>

                                                                                        {/* Incorrect Alert */}
                                                                                        <Alert 
                                                                                                color="danger" 
                                                                                                isOpen={this.state.incorrectAlert}
                                                                                        >
                                                                                                Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[13].definition}"
                                                                                        </Alert>

                                                                                        <legend>{sortedDataQuizzes[34].words[13].word}</legend>


                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[13].randomDefOne} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[13].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[13].randomDefOne}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[13].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[13].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[13].randomDefThree}
                                                                                                        </Label>
                                                                                                </FormGroup>
                                                                                                

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[13].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[13].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[13].randomDefTwo}
                                                                                                        </Label>
                                                                                                </FormGroup>
                                                                                                
                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                        <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[13].definition} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[13].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[13].definition}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                </FormGroup>
                                                                        </Form>

                                                                        {/* Check Answer Button */}
                                                                        <Button 
                                                                                onClick={this.checkAnswer} 
                                                                                value={sortedDataQuizzes[34].words[13].definition}
                                                                                disabled={this.state.checkButton}
                                                                        > 
                                                                                Check Answer 
                                                                        </Button>

                                                                        {/* Next Question Button */}
                                                                        <Button 
                                                                                        onClick={() => this.toggle('15')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                        </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Question 15 */}
                                                        <TabPane tabId="15" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                        <h1>Question: 15 of 25</h1>

                                                                        <Form>
                                                                                <FormGroup tag="fieldset">

                                                                                        {/* Correct Alert */}
                                                                                        <Alert 
                                                                                                color="success" 
                                                                                                isOpen={this.state.correctAlert}
                                                                                        >
                                                                                                Correct! Click "next question" to move on.
                                                                                        </Alert>

                                                                                        {/* Incorrect Alert */}
                                                                                        <Alert 
                                                                                                color="danger" 
                                                                                                isOpen={this.state.incorrectAlert}
                                                                                        >
                                                                                                Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[14].definition}"
                                                                                        </Alert>

                                                                                        <legend>{sortedDataQuizzes[34].words[14].word}</legend>


                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[14].randomDefOne} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[14].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[14].randomDefOne}
                                                                                                        </Label>
                                                                                                </FormGroup>
                                                                                                
                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                        <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[14].definition} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[14].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[14].definition}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[14].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[14].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[14].randomDefThree}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[14].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[14].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[14].randomDefTwo}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                </FormGroup>
                                                                        </Form>

                                                                        {/* Check Answer Button */}
                                                                        <Button 
                                                                                onClick={this.checkAnswer} 
                                                                                value={sortedDataQuizzes[34].words[14].definition}
                                                                                disabled={this.state.checkButton}
                                                                        > 
                                                                                Check Answer 
                                                                        </Button>

                                                                        {/* Next Question Button */}
                                                                        <Button 
                                                                                        onClick={() => this.toggle('16')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                        </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>
                                                
                                                        {/* Question 16 */}
                                                        <TabPane tabId="16" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                                <h1>Question: 16 of 25</h1>

                                                                                <Form>
                                                                                        <FormGroup tag="fieldset">

                                                                                                {/* Correct Alert */}
                                                                                                <Alert 
                                                                                                        color="success" 
                                                                                                        isOpen={this.state.correctAlert}
                                                                                                >
                                                                                                        Correct! Click "next question" to move on.
                                                                                                </Alert>

                                                                                                {/* Incorrect Alert */}
                                                                                                <Alert 
                                                                                                        color="danger" 
                                                                                                        isOpen={this.state.incorrectAlert}
                                                                                                >
                                                                                                        Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[15].definition}"
                                                                                                </Alert>

                                                                                                <legend>{sortedDataQuizzes[34].words[15].word}</legend>


                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[15].randomDefOne}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[15].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                                {sortedDataQuizzes[34].words[15].randomDefOne}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                

                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[15].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[15].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[15].randomDefTwo}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                                                                                        <FormGroup check className="question_input" value={sortedDataQuizzes[34].words[15].definition}>
                                                                                                                <Label check >
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[15].definition}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[15].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[15].definition}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[15].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[15].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[15].randomDefThree}
                                                                                                                </Label>
                                                                                                        </FormGroup>

                                                                                        </FormGroup>
                                                                                </Form>

                                                                                {/* Check Answer Button */}
                                                                                <Button 
                                                                                        onClick={this.checkAnswer} 
                                                                                        value={sortedDataQuizzes[34].words[15].definition}
                                                                                        disabled={this.state.checkButton}
                                                                                > 
                                                                                        Check Answer 
                                                                                </Button>

                                                                                {/* Next Question Button */}
                                                                                <Button 
                                                                                        onClick={() => this.toggle('17')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                                </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Question 17 */}
                                                        <TabPane tabId="17" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                        <h1>Question: 17 of 25</h1>

                                                                        <Form>
                                                                                <FormGroup tag="fieldset">

                                                                                        {/* Correct Alert */}
                                                                                        <Alert 
                                                                                                color="success" 
                                                                                                isOpen={this.state.correctAlert}
                                                                                        >
                                                                                                Correct! Click "next question" to move on.
                                                                                        </Alert>

                                                                                        {/* Incorrect Alert */}
                                                                                        <Alert 
                                                                                                color="danger" 
                                                                                                isOpen={this.state.incorrectAlert}
                                                                                        >
                                                                                                Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[16].definition}"
                                                                                        </Alert>

                                                                                        <legend>{sortedDataQuizzes[34].words[16].word}</legend>


                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[16].randomDefOne} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[16].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[16].randomDefOne}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[16].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[16].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[16].randomDefThree}
                                                                                                        </Label>
                                                                                                </FormGroup>
                                                                                                
                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                        <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[16].definition} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[16].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[16].definition}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[16].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[16].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[16].randomDefTwo}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                </FormGroup>
                                                                        </Form>

                                                                        {/* Check Answer Button */}
                                                                        <Button 
                                                                                onClick={this.checkAnswer} 
                                                                                value={sortedDataQuizzes[34].words[16].definition}
                                                                                disabled={this.state.checkButton}
                                                                        > 
                                                                                Check Answer 
                                                                        </Button>

                                                                        {/* Next Question Button */}
                                                                        <Button 
                                                                                        onClick={() => this.toggle('18')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                        </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Question 18 */}
                                                        <TabPane tabId="18" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                        <h1>Question: 18 of 25</h1>

                                                                        <Form>
                                                                                <FormGroup tag="fieldset">

                                                                                        {/* Correct Alert */}
                                                                                        <Alert 
                                                                                                color="success" 
                                                                                                isOpen={this.state.correctAlert}
                                                                                        >
                                                                                                Correct! Click "next question" to move on.
                                                                                        </Alert>

                                                                                        {/* Incorrect Alert */}
                                                                                        <Alert 
                                                                                                color="danger" 
                                                                                                isOpen={this.state.incorrectAlert}
                                                                                        >
                                                                                                Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[17].definition}"
                                                                                        </Alert>

                                                                                        <legend>{sortedDataQuizzes[34].words[17].word}</legend>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                        <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[17].definition} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[17].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[17].definition}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[17].randomDefOne} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[17].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[17].randomDefOne}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[17].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[17].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[17].randomDefThree}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[17].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[17].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[17].randomDefTwo}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                </FormGroup>
                                                                        </Form>

                                                                        {/* Check Answer Button */}
                                                                        <Button 
                                                                                onClick={this.checkAnswer} 
                                                                                value={sortedDataQuizzes[34].words[17].definition}
                                                                                disabled={this.state.checkButton}
                                                                        > 
                                                                                Check Answer 
                                                                        </Button>

                                                                        {/* Next Question Button */}
                                                                        <Button 
                                                                                        onClick={() => this.toggle('19')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                        </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>
                                                
                                                        {/* Question 19 */}
                                                        <TabPane tabId="19" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                                <h1>Question: 19 of 25</h1>

                                                                                <Form>
                                                                                        <FormGroup tag="fieldset">

                                                                                                {/* Correct Alert */}
                                                                                                <Alert 
                                                                                                        color="success" 
                                                                                                        isOpen={this.state.correctAlert}
                                                                                                >
                                                                                                        Correct! Click "next question" to move on.
                                                                                                </Alert>

                                                                                                {/* Incorrect Alert */}
                                                                                                <Alert 
                                                                                                        color="danger" 
                                                                                                        isOpen={this.state.incorrectAlert}
                                                                                                >
                                                                                                        Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[18].definition}"
                                                                                                </Alert>

                                                                                                <legend>{sortedDataQuizzes[34].words[18].word}</legend>


                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[18].randomDefOne}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[18].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                                {sortedDataQuizzes[34].words[18].randomDefOne}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                

                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[18].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[18].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[18].randomDefTwo}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                                                                                        <FormGroup check className="question_input" value={sortedDataQuizzes[34].words[18].definition}>
                                                                                                                <Label check >
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[18].definition}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[18].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[18].definition}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[18].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[18].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[18].randomDefThree}
                                                                                                                </Label>
                                                                                                        </FormGroup>

                                                                                        </FormGroup>
                                                                                </Form>

                                                                                {/* Check Answer Button */}
                                                                                <Button 
                                                                                        onClick={this.checkAnswer} 
                                                                                        value={sortedDataQuizzes[34].words[18].definition}
                                                                                        disabled={this.state.checkButton}
                                                                                > 
                                                                                        Check Answer 
                                                                                </Button>

                                                                                {/* Next Question Button */}
                                                                                <Button 
                                                                                        onClick={() => this.toggle('20')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                                </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Question 20 */}
                                                        <TabPane tabId="20" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                        <h1>Question: 20 of 25</h1>

                                                                        <Form>
                                                                                <FormGroup tag="fieldset">

                                                                                        {/* Correct Alert */}
                                                                                        <Alert 
                                                                                                color="success" 
                                                                                                isOpen={this.state.correctAlert}
                                                                                        >
                                                                                                Correct! Click "next question" to move on.
                                                                                        </Alert>

                                                                                        {/* Incorrect Alert */}
                                                                                        <Alert 
                                                                                                color="danger" 
                                                                                                isOpen={this.state.incorrectAlert}
                                                                                        >
                                                                                                Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[19].definition}"
                                                                                        </Alert>

                                                                                        <legend>{sortedDataQuizzes[34].words[19].word}</legend>


                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[19].randomDefOne} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[19].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[19].randomDefOne}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[19].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[19].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[19].randomDefThree}
                                                                                                        </Label>
                                                                                                </FormGroup>
                                                                                                

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[19].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[19].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[19].randomDefTwo}
                                                                                                        </Label>
                                                                                                </FormGroup>
                                                                                                
                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                        <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[19].definition} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[19].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[19].definition}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                </FormGroup>
                                                                        </Form>

                                                                        {/* Check Answer Button */}
                                                                        <Button 
                                                                                onClick={this.checkAnswer} 
                                                                                value={sortedDataQuizzes[34].words[19].definition}
                                                                                disabled={this.state.checkButton}
                                                                        > 
                                                                                Check Answer 
                                                                        </Button>

                                                                        {/* Next Question Button */}
                                                                        <Button 
                                                                                        onClick={() => this.toggle('21')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                        </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Question 21 */}
                                                        <TabPane tabId="21" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                        <h1>Question: 21 of 25</h1>

                                                                        <Form>
                                                                                <FormGroup tag="fieldset">

                                                                                        {/* Correct Alert */}
                                                                                        <Alert 
                                                                                                color="success" 
                                                                                                isOpen={this.state.correctAlert}
                                                                                        >
                                                                                                Correct! Click "next question" to move on.
                                                                                        </Alert>

                                                                                        {/* Incorrect Alert */}
                                                                                        <Alert 
                                                                                                color="danger" 
                                                                                                isOpen={this.state.incorrectAlert}
                                                                                        >
                                                                                                Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[20].definition}"
                                                                                        </Alert>

                                                                                        <legend>{sortedDataQuizzes[34].words[20].word}</legend>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                        <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[20].definition} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[20].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[20].definition}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[20].randomDefOne} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[20].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[20].randomDefOne}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[20].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[20].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[20].randomDefThree}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[20].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[20].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[20].randomDefTwo}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                </FormGroup>
                                                                        </Form>

                                                                        {/* Check Answer Button */}
                                                                        <Button 
                                                                                onClick={this.checkAnswer} 
                                                                                value={sortedDataQuizzes[34].words[20].definition}
                                                                                disabled={this.state.checkButton}
                                                                        > 
                                                                                Check Answer 
                                                                        </Button>

                                                                        {/* Next Question Button */}
                                                                        <Button 
                                                                                        onClick={() => this.toggle('22')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                        </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>
                                                
                                                        {/* Question 22 */}
                                                        <TabPane tabId="22" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                                <h1>Question: 22 of 25</h1>

                                                                                <Form>
                                                                                        <FormGroup tag="fieldset">

                                                                                                {/* Correct Alert */}
                                                                                                <Alert 
                                                                                                        color="success" 
                                                                                                        isOpen={this.state.correctAlert}
                                                                                                >
                                                                                                        Correct! Click "next question" to move on.
                                                                                                </Alert>

                                                                                                {/* Incorrect Alert */}
                                                                                                <Alert 
                                                                                                        color="danger" 
                                                                                                        isOpen={this.state.incorrectAlert}
                                                                                                >
                                                                                                        Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[21].definition}"
                                                                                                </Alert>

                                                                                                <legend>{sortedDataQuizzes[34].words[21].word}</legend>


                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[21].randomDefOne}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[21].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                                {sortedDataQuizzes[34].words[21].randomDefOne}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                

                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[21].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[21].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[21].randomDefTwo}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                                                                                        <FormGroup check className="question_input" value={sortedDataQuizzes[34].words[21].definition}>
                                                                                                                <Label check >
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[21].definition}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[21].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[21].definition}
                                                                                                                </Label>
                                                                                                        </FormGroup>
                                                                                                        
                                                                                                        <FormGroup check className="question_input">
                                                                                                                <Label check>
                                                                                                                        <Input type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[21].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[21].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[21].randomDefThree}
                                                                                                                </Label>
                                                                                                        </FormGroup>

                                                                                        </FormGroup>
                                                                                </Form>

                                                                                {/* Check Answer Button */}
                                                                                <Button 
                                                                                        onClick={this.checkAnswer} 
                                                                                        value={sortedDataQuizzes[34].words[21].definition}
                                                                                        disabled={this.state.checkButton}
                                                                                > 
                                                                                        Check Answer 
                                                                                </Button>

                                                                                {/* Next Question Button */}
                                                                                <Button 
                                                                                        onClick={() => this.toggle('23')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                                </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Question 23 */}
                                                        <TabPane tabId="23" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                        <h1>Question: 23 of 25</h1>

                                                                        <Form>
                                                                                <FormGroup tag="fieldset">

                                                                                        {/* Correct Alert */}
                                                                                        <Alert 
                                                                                                color="success" 
                                                                                                isOpen={this.state.correctAlert}
                                                                                        >
                                                                                                Correct! Click "next question" to move on.
                                                                                        </Alert>

                                                                                        {/* Incorrect Alert */}
                                                                                        <Alert 
                                                                                                color="danger" 
                                                                                                isOpen={this.state.incorrectAlert}
                                                                                        >
                                                                                                Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[22].definition}"
                                                                                        </Alert>

                                                                                        <legend>{sortedDataQuizzes[34].words[22].word}</legend>


                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[22].randomDefOne} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[22].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[22].randomDefOne}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                        <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[22].definition} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[22].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[22].definition}
                                                                                                        </Label>
                                                                                                </FormGroup>
                                                                                                
                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[22].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[22].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[22].randomDefThree}
                                                                                                        </Label>
                                                                                                </FormGroup>
                                                                                                

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[22].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[22].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[22].randomDefTwo}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                </FormGroup>
                                                                        </Form>

                                                                        {/* Check Answer Button */}
                                                                        <Button 
                                                                                onClick={this.checkAnswer} 
                                                                                value={sortedDataQuizzes[34].words[22].definition}
                                                                                disabled={this.state.checkButton}
                                                                        > 
                                                                                Check Answer 
                                                                        </Button>

                                                                        {/* Next Question Button */}
                                                                        <Button 
                                                                                        onClick={() => this.toggle('24')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                        </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Question 24 */}
                                                        <TabPane tabId="24" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                        <h1>Question: 24 of 25</h1>

                                                                        <Form>
                                                                                <FormGroup tag="fieldset">

                                                                                        {/* Correct Alert */}
                                                                                        <Alert 
                                                                                                color="success" 
                                                                                                isOpen={this.state.correctAlert}
                                                                                        >
                                                                                                Correct! Click "next question" to move on.
                                                                                        </Alert>

                                                                                        {/* Incorrect Alert */}
                                                                                        <Alert 
                                                                                                color="danger" 
                                                                                                isOpen={this.state.incorrectAlert}
                                                                                        >
                                                                                                Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[23].definition}"
                                                                                        </Alert>

                                                                                        <legend>{sortedDataQuizzes[34].words[23].word}</legend>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                        <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[23].definition} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[23].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[23].definition}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[23].randomDefOne} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[23].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[23].randomDefOne}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[23].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[23].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[23].randomDefThree}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[23].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[23].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[23].randomDefTwo}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                </FormGroup>
                                                                        </Form>

                                                                        {/* Check Answer Button */}
                                                                        <Button 
                                                                                onClick={this.checkAnswer} 
                                                                                value={sortedDataQuizzes[34].words[23].definition}
                                                                                disabled={this.state.checkButton}
                                                                        > 
                                                                                Check Answer 
                                                                        </Button>

                                                                        {/* Next Question Button */}
                                                                        <Button 
                                                                                        onClick={() => this.toggle('25')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                        </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Question 25 */}
                                                        <TabPane tabId="25" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                        <h1>Question: 25 of 25</h1>

                                                                        <Form>
                                                                                <FormGroup tag="fieldset">

                                                                                        {/* Correct Alert */}
                                                                                        <Alert 
                                                                                                color="success" 
                                                                                                isOpen={this.state.correctAlert}
                                                                                        >
                                                                                                Correct! Click "next question" to move on.
                                                                                        </Alert>

                                                                                        {/* Incorrect Alert */}
                                                                                        <Alert 
                                                                                                color="danger" 
                                                                                                isOpen={this.state.incorrectAlert}
                                                                                        >
                                                                                                Wrong answer. The correct answer is: <br/> "{sortedDataQuizzes[34].words[24].definition}"
                                                                                        </Alert>

                                                                                        <legend>{sortedDataQuizzes[34].words[24].word}</legend>


                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[24].randomDefOne} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[24].randomDefOne}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                        {sortedDataQuizzes[34].words[24].randomDefOne}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[24].randomDefThree}
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[24].randomDefThree}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[24].randomDefThree}
                                                                                                        </Label>
                                                                                                </FormGroup>
                                                                                                
                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                        <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[24].definition} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[24].definition}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[24].definition}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                                <FormGroup check className="question_input">
                                                                                                        <Label check>
                                                                                                                <Input 
                                                                                                                        type="radio" 
                                                                                                                        name="radio1" 
                                                                                                                        value={sortedDataQuizzes[34].words[24].randomDefTwo} 
                                                                                                                        checked={this.state.userAnswers === sortedDataQuizzes[34].words[24].randomDefTwo}
                                                                                                                        onChange={this.handleOptionChange}
                                                                                                                />{' '}
                                                                                                                {sortedDataQuizzes[34].words[24].randomDefTwo}
                                                                                                        </Label>
                                                                                                </FormGroup>

                                                                                </FormGroup>
                                                                        </Form>

                                                                        {/* Check Answer Button */}
                                                                        <Button 
                                                                                onClick={this.checkAnswer} 
                                                                                value={sortedDataQuizzes[34].words[24].definition}
                                                                                disabled={this.state.checkButton}
                                                                        > 
                                                                                Check Answer 
                                                                        </Button>

                                                                        {/* Next Question Button */}
                                                                        <Button 
                                                                                        onClick={() => this.toggle('26')} 
                                                                                        disabled={this.state.nextButton}
                                                                                > 
                                                                                        Next Question 
                                                                        </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Final Tab */}
                                                        <TabPane tabId="26" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                        <h1>Great Job!</h1>

                                                                        <h2>You answered {this.state.correct} out of 25 questions correctly.</h2>

                                                                        <h3>Retake the quiz or move on to another one!</h3>

                                                                        {/* Check Answer Button */}
                                                                        <Button 
                                                                                onClick={this.retakeQuiz} 
                                                                        > 
                                                                                Retake Quiz
                                                                        </Button>

                                                                        {/* Next Question Button */}
                                                                        <Button 
                                                                                tag={Link} to={`/quiz-list`}
                                                                        > 
                                                                                Go Back
                                                                        </Button>

                                                                        </Col>
                                                                </Row>
                                                        </TabPane>
                                                </TabContent>
                                        </Col>
                                </Row>
                        </div>
                )
        }
}

export default graphql(getQuizzesQuery)(QuizThirtyFive);