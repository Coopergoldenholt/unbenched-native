import React from 'react';
import {View, StyleSheet} from 'react-native';
import CardStack from '../../../../components/CardStack';

const Help = (props) => {
  return (
    <View>
      <View style={styles.cardStackContainer}>
        <CardStack />
      </View>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  cardStackContainer: {
    height: 300,
  },
});
