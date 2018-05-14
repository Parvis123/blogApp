import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/postsIndex';
import NewPosts from './components/newPosts';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

import React, { Component } from 'react';


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<BrowserRouter>
  		<div>
  			<Switch>
		  		<Route path="/posts/new" component={NewPosts}/>
		  		<Route path="/" component={PostsIndex}/>
	  		</Switch>
	  		{/*<Route path="" component={}/>*/}
  		</div>
  	</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
