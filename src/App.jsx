import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route  from 'react-router-dom/Route';
// import { Route, Switch, Redirect } from 'react-router-dom';
import Posts from './components/posts/Posts';
import singlePost from './components/posts/singlePost';
import { Provider } from "react-redux";


import Footer from './components/Footer';

// const store = createStore(() => [], {}, applyMiddleware());

import store from './store';

class App extends Component{
	render(){ 
		return(
			<Provider store={store}>
				<Router>				
					<div className="App">
						<Route path="/" exact component={Posts}/>
						{/* <Route path="/post/:id" exact component={singlePost}/>							 */}
						<Footer />
					</div>			
				</Router>
			</Provider>
		);
	}
}

export default App;