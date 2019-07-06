import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Movies from './components/Movies';
import VideoForm from './components/VideoForm';
import NotFound from './components/NotFound';
import Video from './components/Video';

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Movies} />
      <Route path="/new" exact component={VideoForm} />
      <Route path="/video/:videoId" component={Video}/>
      <Route component={NotFound} />
    </Switch>
  )
}

export default AppRoutes;