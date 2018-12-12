import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

//importing CSS file
import './QuestionsModal.css';

class QuestionsModal extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

	render() {
		console.log(this.props);
		return (
			<div>
				<Button color="danger" onClick={this.props.toggle}>{this.props.buttonLabel}</Button>
				<Modal isOpen={this.props.modal} toggle={this.props.toggle}>
					<ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
					<ModalBody>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.props.toggle}>Do Something</Button>{' '}
						<Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default QuestionsModal;











// class QuestionsContainer extends Component {

//         constructor(props) {
//                 super(props);

//                 const quizWords = [];
            
//                 this.toggle = this.toggle.bind(this);
//                 this.state = {
//                   activeTab: '1',
//                   quizWords
//                 };
//         }
            
//         toggle(tab) {
//                 if (this.state.activeTab !== tab) {
//                         this.setState({
//                         activeTab: tab
//                         });
//                 }
//         }

//         // displayQuestions() {
//         //         const data = this.props.data;

//         //         if (data.loading) {
//         //                 return ( <div>Loading Questions...</div> );
//         //         } else {
//         //                 return dataQuizzes.map(quiz => {
//         //                         return (

//         //                         )
//         //                 });
//         //         }
//         // }

//         // client.query({
//         //         query: gql`
//         //         getSingleQuizQuery($id: String!) {
//         //                 quiz (id: $id) {
//         //                         id
//         //                         quizName
//         //                         words {
//         //                                 word
//         //                                 definition
//         //                         }
//         //                 }
//         //         }`
//         //       }).then(response => console.log(response.data))

//         render() {
//                 // console.log(this.props); 
                
//                 const data = this.props.data;
//                 const quizWordsArr = this.state.quizWords;
//                 const pathnameId = this.props.urlPath.split('/')[2];
//                 // console.log(pathnameId);
//                 // console.log(data.words.quiz.quizId);

//                 // const query = gql`
//                 //         query GetQuizQuery($Id: String!) {
//                 //                 quiz (id: $Id) {
//                 //                         id
//                 //                         quizName
//                 //                         words {
//                 //                                 word
//                 //                                 definition
//                 //                         }
//                 //                 }
//                 //         }
//                 // `;
//                 // const params = { Id: this.props.quizId };
//                 // const result = graphql(query, null, null, params);
//                 // console.log(result);

//                 if  (data.loading) {
//                         return ( <p>Loading...</p> );
//                 } else {
//                         // for (let word of data.words) {
//                         //         if (data.words.quizId === pathnameId) {
//                         //                 quizWordsArr.push(word);
//                         //         }
//                         // }
//                         // console.log(quizWordsArr);
//                 }              
//                 return (
//                         <div>
//                                 <Row>
//                                         <Nav tabs>
//                                                 <NavItem>
//                                                         <NavLink
//                                                                 className={classnames({ active: this.state.activeTab === '1' })}
//                                                                 onClick={() => { this.toggle('1'); }}
//                                                         >
//                                                                 Tab1
//                                                         </NavLink>
//                                                 </NavItem>
//                                         </Nav>
//                                 </Row>
//                                 <Row>
//                                 {/* { this.displayQuestions() } */}

//                                         <TabContent activeTab={this.state.activeTab}>
//                                                 <TabPane tabId="1">
//                                                         <Row>
//                                                                 <Col sm="12">
//                                                                         <h4>Tab 1 Contents</h4>
//                                                                 </Col>
//                                                         </Row>
//                                                 </TabPane>
//                                         </TabContent>
//                                 </Row>
//                         </div>
//                 )
//         }
// }

// export default graphql
//         // (getSingleQuizQuery, {
// //         options: (props) => {
// //             return {
// //                 variables: {
// //                     id: props.quizId
// //                 }
// //             }
// //         }
// //     })
//         (getWordsQuery)(QuestionsContainer);