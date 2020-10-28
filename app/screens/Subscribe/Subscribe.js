import React from 'react';
import {View} from 'react-native';
import {PricingCard} from 'react-native-elements';

const Subscribe = () => {
  return (
    <View>
      <PricingCard
        color="#4f9deb"
        title="UnBenched"
        price="$19.99"
        info={[
          'Basketball Generator',
          'Athlete Training Generator',
          'Access to All Our Drills',
          'Track Your Improvment',
        ]}
        button={{title: 'GET STARTED'}}
      />
    </View>
  );
};

export default Subscribe;
