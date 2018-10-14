import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { 
        TabContent, 
        TabPane, 
        Nav, 
        NavItem, 
        NavLink, 
        Row, 
        Col
} from 'reactstrap';
import classnames from 'classnames';
import { getWordsQuery, getSingleQuiz } from '../../Queries/Queries';

class QuestionsContainer extends Component {

        constructor(props) {
                super(props);

                const quizWords = [];
            
                this.toggle = this.toggle.bind(this);
                this.state = {
                  activeTab: '1',
                  quizWords
                };
        }
            
        toggle(tab) {
                if (this.state.activeTab !== tab) {
                        this.setState({
                        activeTab: tab
                        });
                }
        }

        // displayQuestions() {
        //         const data = this.props.data;

        //         if (data.loading) {
        //                 return ( <div>Loading Questions...</div> );
        //         } else {
        //                 return dataQuizzes.map(quiz => {
        //                         return (

        //                         )
        //                 });
        //         }
        // }

        // client.query({
        //         query: gql`
        //         getSingleQuizQuery($id: String!) {
        //                 quiz (id: $id) {
        //                         id
        //                         quizName
        //                         words {
        //                                 word
        //                                 definition
        //                         }
        //                 }
        //         }`
        //       }).then(response => console.log(response.data))

        render() {
                console.log(this.props); 
                
                const data = this.props.data;
                const quizWordsArr = this.state.quizWords;
                const pathnameId = this.props.urlPath.split('/')[2];
                console.log(pathnameId);
                // console.log(data.words.quiz.quizId);

                if  (data.loading) {
                        return ( <p>Loading...</p> );
                } else {
                        // for (let word of data.words) {
                        //         if (data.words.quizId === pathnameId) {
                        //                 quizWordsArr.push(word);
                        //         }
                        // }
                        // console.log(quizWordsArr);
                }              
                return (
                        <div>
                                <Row>
                                        <Nav tabs>
                                                <NavItem>
                                                        <NavLink
                                                                className={classnames({ active: this.state.activeTab === '1' })}
                                                                onClick={() => { this.toggle('1'); }}
                                                        >
                                                                Tab1
                                                        </NavLink>
                                                </NavItem>
                                        </Nav>
                                </Row>
                                <Row>
                                {/* { this.displayQuestions() } */}

                                        <TabContent activeTab={this.state.activeTab}>
                                                <TabPane tabId="1">
                                                        <Row>
                                                                <Col sm="12">
                                                                        <h4>Tab 1 Contents</h4>
                                                                </Col>
                                                        </Row>
                                                </TabPane>
                                        </TabContent>
                                </Row>
                        </div>
                )
        }
}

export default graphql(getWordsQuery)(QuestionsContainer);