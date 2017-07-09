import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage/HomePage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import UnderConstructionPage from './components/UnderConstructionPage/UnderConstructionPage';

console.log('Sup nerds');

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={UnderConstructionPage}/>
    <Route path="blog" component={UnderConstructionPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
