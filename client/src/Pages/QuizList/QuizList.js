import React, { Component } from 'react';

//import components
import QuizListCards from '../../Components/QuizListCards/QuizListCards';

class QuizList extends Component {
	
	render() {
		return (
                        <div className="quizListPageContainer">
                                <QuizListCards />
                        </div>
		);
	}
}

export default QuizList;