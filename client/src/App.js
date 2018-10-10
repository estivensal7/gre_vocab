import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';

//Importing Components
import Main from './Components/Main/Main';

//apollo client set up
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
		<BrowserRouter>
			<div className="App">
				<Main />
			</div>
		</BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
