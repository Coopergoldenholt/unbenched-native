import React from 'react';
import {View, StyleSheet} from 'react-native';
import CardStack from '../../../../components/CardStack';

const Help = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardStackContainer}>
        <CardStack />
      </View>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStackContainer: {
    height: 300,
    width: '100%',

    alignItems: 'center',
    justifyContent: 'center',
  },
});
