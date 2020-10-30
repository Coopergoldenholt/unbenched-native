import React from 'react';
import HomeStack from './Stacks/HomeStack';
import AuthStack from './Stacks/AuthenticationStack';
import ScreenStack from './Stacks/WorkoutStack';
import DefaultSettings from '../app/screens/DefaultSettings/DefaultSettings';
import {connect} from 'react-redux';

const Stacks = (props) => {
  return props.user.user ? (
    props.user.user.athleteGymDefault ? (
      <HomeStack />
    ) : (
      <DefaultSettings />
    )
  ) : (
    // {/* <ScreenStack /> */}

    <AuthStack />
    // <HomeStack />
  );
  // );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Stacks);
