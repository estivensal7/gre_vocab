// {/*Setting up Main Component to render React Routes for every Page/Link*/}
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import QuizList from '../QuizList/QuizList';


//Import components

export default class Main extends Component {
    render() {
      return (
        <Switch>
        {/* <Route exact path='/' component={Home}></Route> */}
                <Route exact path='/' component={QuizList}></Route>
        </Switch>
      )
    }
  }