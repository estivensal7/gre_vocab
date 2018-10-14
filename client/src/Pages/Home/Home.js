import React, { Component } from 'react';

//import components
import HomeHeader from '../../Components/HomeHeader/HomeHeader';
import HomeOptionsContainer from '../../Components/HomeOptionsContainer/HomeOptionsContainer';

class Home extends Component {
	render() {
                console.log(this.props.location.pathname);
		return (
                        <div className="home">
                                <HomeHeader />
                                <HomeOptionsContainer />
                        </div>
		);
	}
}

export default Home;