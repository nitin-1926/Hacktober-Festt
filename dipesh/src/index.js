import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter , Route ,Switch } from "react-router-dom"
import PostIndex from "./components/postIndex"
import promise from 'redux-promise'
import PostNew from "./components/PostNew"
import PostShow from "./components/postShow"


import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

   
   <HashRouter>
    <div>
      <Switch>
     <Route path="/posts/new"  component={PostNew} ></Route>
    <Route path="/posts/:id"  component={PostShow} ></Route>
    <Route path="/" component={PostIndex} ></Route>
     </Switch>
   </div>
   </HashRouter>
  
  </Provider>
  , document.querySelector('#root'));
