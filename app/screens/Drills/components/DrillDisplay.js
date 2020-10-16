import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const DrillDisplay = (props) => {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('Drill', {
          drill: props.drill,
          name: props.title,
        })
      }
      style={styles.container}>
      <Text>{props.title}</Text>
      <Icon name={'chevron-right'} size={30} color="black" />
    </TouchableOpacity>
  );
};

export default DrillDisplay;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 15,
  },
});
