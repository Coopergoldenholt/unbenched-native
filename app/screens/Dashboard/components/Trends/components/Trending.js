import React from 'react';
import {View, Text} from 'react-native';

const Trending = (props) => {
  let length = props.data.length;
  let firstHalf = props.data.slice(0, Math.ceil(length / 2));
  let secondHalf = props.data.slice(Math.ceil(length / 2), length);

  let firstHalfTotal = firstHalf.reduce((acc, ele) => {
    return (acc += ele);
  });
  let secondHalfTotal = secondHalf.reduce((acc, ele) => {
    return (acc += ele);
  });

  console.log(firstHalfTotal);
  console.log(secondHalfTotal);
  //   console.log(length);

  const trending = () => {
    if (firstHalfTotal > secondHalfTotal) {
      return 'negative';
    } else if (firstHalfTotal < secondHalfTotal) {
      return 'positive';
    } else 'equal';
  };

  return (
    <View>
      <Text>{trending()}</Text>
    </View>
  );
};

export default Trending;
