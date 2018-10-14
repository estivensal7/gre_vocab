// {/*Setting up Main Component to render React Routes for every Page/Link*/}
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Home from '../../Pages/Home/Home';
import QuizList from '../../Pages/QuizList/QuizList';
import QuizPage from '../../Pages/QuizPage/QuizPage';

export default class Main extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={Home}></Route>
				<Route exact path='/quiz-list' component={QuizList}></Route>
				<Route exact path='/quiz-page/:id' component={QuizPage}></Route>
			</Switch>
		)
	}
}