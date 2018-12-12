import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { 
        Row,
        Col, 
        TabContent, 
        TabPane,
        Button
} from 'reactstrap';

import { Link } from "react-router-dom";

import { getQuizzesQuery } from '../../Queries/Queries';

import './SectionCards.css';

class Section15 extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        activeTab: '1',
                        previousButton: false,
                        nextButton: false,
                        section: 14
                }

                this.toggle = this.toggle.bind(this);
        }

        toggle(tab) {
                if (this.state.activeTab !== tab) {
                        this.setState({
                                activeTab: tab
                        });
                }
        }

        render() {
                let data = this.props.data;
                let dataSections = data.quizzes;
                let sortedDataSections;
                
                if (data.loading) {
                        return ( <div>Loading Words...</div> );
                } else {
                        sortedDataSections = dataSections.sort(function(a,b) {
                                return a.quizName-b.quizName;
                        })
                        console.log(sortedDataSections[0]);
                }
                return (
			<div>
                                <Row>
                                        <Col md={{size: 4, offset: 4}}>
                                                <TabContent activeTab={this.state.activeTab}>

                                                        {/* Word 1 */}
                                                        <TabPane tabId="1" className="question_tab">
                                                                <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">1 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[0].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[0].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('2')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 2 */}
                                                        <TabPane tabId="2" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">2 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[1].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[1].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('1')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('3')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 3 */}
                                                        <TabPane tabId="3" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">3 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[2].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[2].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('2')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('4')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 4 */}
                                                        <TabPane tabId="4" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">

                                                                                <h1 className="word-title">4 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[3].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[3].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('3')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('5')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 5 */}
                                                        <TabPane tabId="5" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">5 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[4].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[4].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('4')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('6')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 6 */}
                                                        <TabPane tabId="6" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">6 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[5].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[5].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('5')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('7')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 7 */}
                                                        <TabPane tabId="7" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">7 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[6].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[6].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('6')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('8')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 8 */}
                                                        <TabPane tabId="8" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">8 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[7].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[7].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('7')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('9')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 9 */}
                                                        <TabPane tabId="9" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">9 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[8].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[8].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('8')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('10')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 10 */}
                                                        <TabPane tabId="10" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">10 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[9].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[9].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('9')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('11')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 11 */}
                                                        <TabPane tabId="11" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">11 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[10].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[10].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('10')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('12')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 12 */}
                                                        <TabPane tabId="12" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">12 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[11].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[11].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('11')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('13')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 13 */}
                                                        <TabPane tabId="13" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">13 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[12].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[12].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('12')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('14')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 14 */}
                                                        <TabPane tabId="14" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">14 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[13].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[13].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('13')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('15')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 15 */}
                                                        <TabPane tabId="15" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">15 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[14].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[14].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('14')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('16')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 16 */}
                                                        <TabPane tabId="16" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">16 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[15].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[15].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('15')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('17')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 17 */}
                                                        <TabPane tabId="17" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">17 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[16].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[16].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('16')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('18')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 18 */}
                                                        <TabPane tabId="18" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">18 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[17].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[17].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('17')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('19')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 19 */}
                                                        <TabPane tabId="19" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">19 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[18].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[18].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('18')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('20')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 20 */}
                                                        <TabPane tabId="20" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">20 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[19].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[19].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('19')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('21')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 21 */}
                                                        <TabPane tabId="21" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">21 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[20].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[20].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('20')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('22')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 22 */}
                                                        <TabPane tabId="22" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">22 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[21].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[21].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('21')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('23')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 23 */}
                                                        <TabPane tabId="23" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">23 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[22].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[22].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('22')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('24')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 24 */}
                                                        <TabPane tabId="24" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">24 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[23].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[23].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('23')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>

                                                                                                <Button
                                                                                                        id="study-next-button" 
                                                                                                        onClick={() => this.toggle('25')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Next
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>
                                                                        </Col>
                                                                </Row>
                                                        </TabPane>

                                                        {/* Word 25 */}
                                                        <TabPane tabId="25" className="question_tab">
                                                        <Row>
                                                                        <Col sm="12">
                                                                                <h1 className="word-title">25 of 25</h1>

                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="back-to-sections-button"
                                                                                                        tag={Link} to={`/sections-list`} 
                                                                                                        > 
                                                                                                        Back To Sections
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

                                                                                <div className="flip-card">

                                                                                        <div className="flip-card-inner">

                                                                                                {/* Front of Card*/}
                                                                                                <div className="flip-card-front">
                                                                                                        <div className="flip-card-front"><h1>{sortedDataSections[this.state.section].words[24].word}</h1></div>
                                                                                                </div>
                                                                                                
                                                                                                {/* Back of Card*/}
                                                                                                <div>
                                                                                                        <div className="flip-card-back"><h1>{sortedDataSections[this.state.section].words[24].definition}</h1></div>
                                                                                                </div>
                                                                                        
                                                                                        </div>
                                                                                
                                                                                </div>

                                                                                {/* Next Word Button */}
                                                                                <Row>
                                                                                        <Col>
                                                                                                <Button
                                                                                                        id="study-previous-button" 
                                                                                                        onClick={() => this.toggle('24')} 
                                                                                                        disabled={this.state.nextButton}
                                                                                                        > 
                                                                                                        Previous
                                                                                                </Button>
                                                                                        </Col>
                                                                                </Row>

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

export default graphql(getQuizzesQuery)(Section15);