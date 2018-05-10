import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/postsIndex';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

import React, { Component } from 'react';


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<BrowserRouter>
  		<div>
	  		<Route path="/" component={PostsIndex}/>
	  		{/*<Route path="" component={}/>*/}
  		</div>
  	</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
