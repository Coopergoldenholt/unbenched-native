import React from 'react';
import HomeStack from './Stacks/HomeStack';
import AuthStack from './Stacks/AuthenticationStack';

const Stacks = (props) => {
  return props.user ? <HomeStack /> : <AuthStack />;
};

export default Stacks;
