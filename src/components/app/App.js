import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Banner from '../banner/Banner';
import Blog from '../../routes/Blog';
import Home from '../../routes/Home';
import BlogCategory from '../../routes/BlogCategory';
import './App.css';

export default class App extends React.Component {
  render() {
      return (
         <BrowserRouter>
              <Navigation/>
              <main>
                  <Banner/>
                  <Switch>
                      <Route exact path={'/'} component={Home}/> 
                      <Route exact path={'/blog/:blog_id'} component={Blog}/>
                      <Route path={'/:category_id'} component={BlogCategory}/>
                  </Switch>
              </main>
         </BrowserRouter>
      );
  }
}

