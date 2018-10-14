import React, { Component } from 'react';

//import components
import QuestionsContainer from '../../Components/QuestionsContainer/QuestionsContainer';

class QuizPage extends Component {

	render() {
                // console.log(this.props.location.pathname);
                // console.log(this.props);
		return (
                        <div className="quizPage">
                                <QuestionsContainer 
                                        urlPath={this.props.location.pathname}
                                />
                        </div>
		);
	}
}

export default QuizPage;