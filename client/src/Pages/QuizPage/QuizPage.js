// import React, { Component } from 'react';

// //import components
// import QuestionsContainer from '../../Components/QuestionsContainer/QuestionsContainer';

// // import Queries
// import { getSingleQuizQuery } from '../../Queries/Queries';
// import { graphql } from 'react-apollo';

// class QuizPage extends Component {
//         constructor(props){
//                 super(props);
//                 this.state = {
//                         quizId: this.props.location.pathname.split('/')[2]
//                 }
//         }

//         // getSingleQuizQuery = gql`
//         //         query getSingleQuiz($id: ID) {
//         //                 quiz (id: $id) {
//         //                         id
//         //                         quizName
//         //                         words {
//                 //                                 word
//                 //                                 definition
//                 //                         }
//                 //                 }
//                 //         }
//                 // `;
//                 render() {
//                 // console.log(this.props.location.pathname);
//                 console.log(this.props);
// 		return (
//                         <div className="quizPage" >
//                                 <QuestionsContainer 
//                                         urlPath={this.props.location.pathname}
//                                         quizId = { this.props.location.pathname.split('/')[2] }
//                                 />
//                         </div>
// 		);
// 	}
// }

// export default 
//         graphql(getSingleQuizQuery, {
//                 options: (props) => {
//                     return {
//                         variables: {
//                             id: 
//                         }
//                     }
//                 }
//         })(QuizPage);