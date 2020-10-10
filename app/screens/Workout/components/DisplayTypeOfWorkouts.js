import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

const CollectTime = (props) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => props.handleDrillSelect(props.value)}>
      <View>
        <Text>{props.typeOfWorkout}</Text>
        {props.typeOfDrillsSelected.includes(props.value) ? (
          <Text>selected</Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default CollectTime;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    // width: '30%',
    width: 150,
    height: 200,
    zIndex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    margin: 20,

    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7.49,
    elevation: 12,
    borderRadius: 5,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
