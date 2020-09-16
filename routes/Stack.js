import React from 'react';
import HomeStack from './Stacks/HomeStack';
import AuthStack from './Stacks/AuthenticationStack';
import {connect} from 'react-redux';

const Stacks = (props) => {
  return props.user.user ? <HomeStack /> : <AuthStack />;
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Stacks);
