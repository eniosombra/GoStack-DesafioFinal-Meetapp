import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Meetup from '~/pages/Meetup';
import MeetupDetail from '~/pages/Meetup/Detail';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/meetup/new" exact component={Meetup} isPrivate />
      <Route path="/meetup/edit" exact component={Meetup} isPrivate />
      <Route path="/meetup/detail" exact component={MeetupDetail} isPrivate />
    </Switch>
  );
}
