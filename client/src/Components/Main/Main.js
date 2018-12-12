// {/*Setting up Main Component to render React Routes for every Page/Link*/}
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../Pages/Home/Home';
import QuizList from '../../Pages/QuizList/QuizList';
import StudyCards from '../StudyCards/StudyCards.js';

//importing quiz components
import QuizOne from '../QuizTabs/quizOne';
import QuizTwo from '../QuizTabs/quizTwo';
import QuizThree from '../QuizTabs/quizThree';
import QuizFour from '../QuizTabs/quizFour';
import QuizFive from '../QuizTabs/quizFive';
import QuizSix from '../QuizTabs/quizSix';
import QuizSeven from '../QuizTabs/quizSeven';
import QuizEight from '../QuizTabs/quizEight';
import QuizNine from '../QuizTabs/quizNine';
import QuizTen from '../QuizTabs/quizTen';
import QuizEleven from '../QuizTabs/quizEleven';
import QuizTwelve from '../QuizTabs/quizTwelve';
import QuizThirteen from '../QuizTabs/quizThirteen';
import QuizFourteen from '../QuizTabs/quizFourteen';
import QuizFifteen from '../QuizTabs/quizFifteen';
import QuizSixteen from '../QuizTabs/quizSixteen';
import QuizSeventeen from '../QuizTabs/quizSeventeen';
import QuizEighteen from '../QuizTabs/quizEighteen';
import QuizNineteen from '../QuizTabs/quizNineteen';
import QuizTwenty from '../QuizTabs/quizTwenty';
import QuizTwentyOne from '../QuizTabs/quizTwentyOne';
import QuizTwentyTwo from '../QuizTabs/quizTwentyTwo';
import QuizTwentyThree from '../QuizTabs/quizTwentyThree';
import QuizTwentyFour from '../QuizTabs/quizTwentyFour';
import QuizTwentyFive from '../QuizTabs/quizTwentyFive';
import QuizTwentySix from '../QuizTabs/quizTwentySix';
import QuizTwentySeven from '../QuizTabs/quizTwentySeven';
import QuizTwentyEight from '../QuizTabs/quizTwentyEight';
import QuizTwentyNine from '../QuizTabs/quizTwentyNine';
import QuizThirty from '../QuizTabs/quizThirty';
import QuizThirtyOne from '../QuizTabs/quizThirtyOne';
import QuizThirtyTwo from '../QuizTabs/quizThirtyTwo';
import QuizThirtyThree from '../QuizTabs/quizThirtyThree';
import QuizThirtyFour from '../QuizTabs/quizThirtyFour';
import QuizThirtyFive from '../QuizTabs/quizThirtyFive';
import QuizThirtySix from '../QuizTabs/quizThirtySix';
import QuizThirtySeven from '../QuizTabs/quizThirtySeven';
import QuizThirtyEight from '../QuizTabs/quizThirtyEight';
import QuizThirtyNine from '../QuizTabs/quizThirtyNine';
import QuizForty from '../QuizTabs/quizForty';
import QuizFortyOne from '../QuizTabs/quizFortyOne';
import QuizFortyTwo from '../QuizTabs/quizFortyTwo';
import QuizFortyThree from '../QuizTabs/quizFortyThree';
import QuizFortyFour from '../QuizTabs/quizFortyFour';
import QuizFortyFive from '../QuizTabs/quizFortyFive';
import QuizFortySix from '../QuizTabs/quizFortySix';
import QuizFortySeven from '../QuizTabs/quizFortySeven';
import QuizFortyEight from '../QuizTabs/quizFortyEight';
import QuizFortyNine from '../QuizTabs/quizFortyNine';
import QuizFifty from '../QuizTabs/quizFifty';
import QuizFiftyOne from '../QuizTabs/quizFiftyOne';
import QuizFiftyTwo from '../QuizTabs/quizFiftyTwo';

//importing section components
import Section1 from '../SectionCards/Section1'


export default class Main extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={Home}></Route>
				<Route exact path='/quiz-list' component={QuizList}></Route>
				<Route exact path='/sections-list' component={StudyCards}></Route>

				{/* Quiz List Components */}
				<Route exact path='/quiz-1' component={QuizOne}></Route>
				<Route exact path='/quiz-2' component={QuizTwo}></Route>
				<Route exact path='/quiz-3' component={QuizThree}></Route>
				<Route exact path='/quiz-4' component={QuizFour}></Route>
				<Route exact path='/quiz-5' component={QuizFive}></Route>
				<Route exact path='/quiz-6' component={QuizSix}></Route>
				<Route exact path='/quiz-7' component={QuizSeven}></Route>
				<Route exact path='/quiz-8' component={QuizEight}></Route>
				<Route exact path='/quiz-9' component={QuizNine}></Route>
				<Route exact path='/quiz-10' component={QuizTen}></Route>
				<Route exact path='/quiz-11' component={QuizEleven}></Route>
				<Route exact path='/quiz-12' component={QuizTwelve}></Route>
				<Route exact path='/quiz-13' component={QuizThirteen}></Route>
				<Route exact path='/quiz-14' component={QuizFourteen}></Route>
				<Route exact path='/quiz-15' component={QuizFifteen}></Route>
				<Route exact path='/quiz-16' component={QuizSixteen}></Route>
				<Route exact path='/quiz-17' component={QuizSeventeen}></Route>
				<Route exact path='/quiz-18' component={QuizEighteen}></Route>
				<Route exact path='/quiz-19' component={QuizNineteen}></Route>
				<Route exact path='/quiz-20' component={QuizTwenty}></Route>
				<Route exact path='/quiz-21' component={QuizTwentyOne}></Route>
				<Route exact path='/quiz-22' component={QuizTwentyTwo}></Route>
				<Route exact path='/quiz-23' component={QuizTwentyThree}></Route>
				<Route exact path='/quiz-24' component={QuizTwentyFour}></Route>
				<Route exact path='/quiz-25' component={QuizTwentyFive}></Route>
				<Route exact path='/quiz-26' component={QuizTwentySix}></Route>
				<Route exact path='/quiz-27' component={QuizTwentySeven}></Route>
				<Route exact path='/quiz-28' component={QuizTwentyEight}></Route>
				<Route exact path='/quiz-29' component={QuizTwentyNine}></Route>
				<Route exact path='/quiz-30' component={QuizThirty}></Route>
				<Route exact path='/quiz-31' component={QuizThirtyOne}></Route>
				<Route exact path='/quiz-32' component={QuizThirtyTwo}></Route>
				<Route exact path='/quiz-33' component={QuizThirtyThree}></Route>
				<Route exact path='/quiz-34' component={QuizThirtyFour}></Route>
				<Route exact path='/quiz-35' component={QuizThirtyFive}></Route>
				<Route exact path='/quiz-36' component={QuizThirtySix}></Route>
				<Route exact path='/quiz-37' component={QuizThirtySeven}></Route>
				<Route exact path='/quiz-38' component={QuizThirtyEight}></Route>
				<Route exact path='/quiz-39' component={QuizThirtyNine}></Route>
				<Route exact path='/quiz-40' component={QuizForty}></Route>
				<Route exact path='/quiz-41' component={QuizFortyOne}></Route>
				<Route exact path='/quiz-42' component={QuizFortyTwo}></Route>
				<Route exact path='/quiz-43' component={QuizFortyThree}></Route>
				<Route exact path='/quiz-44' component={QuizFortyFour}></Route>
				<Route exact path='/quiz-45' component={QuizFortyFive}></Route>
				<Route exact path='/quiz-46' component={QuizFortySix}></Route>
				<Route exact path='/quiz-47' component={QuizFortySeven}></Route>
				<Route exact path='/quiz-48' component={QuizFortyEight}></Route>
				<Route exact path='/quiz-49' component={QuizFortyNine}></Route>
				<Route exact path='/quiz-50' component={QuizFifty}></Route>
				<Route exact path='/quiz-51' component={QuizFiftyOne}></Route>
				<Route exact path='/quiz-52' component={QuizFiftyTwo}></Route>

				{/* Section Components */}
				<Route exact path='/section-1' component={Section1}></Route>

			</Switch>
		)
	}
}