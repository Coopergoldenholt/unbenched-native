import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

const CollectTime = (props) => {
  return (
    <TouchableOpacity onPress={() => props.handleDrillSelect(props.value)}>
      <Card containerStyle={styles.card}>
        <Card.Title>{props.typeOfWorkout}</Card.Title>
        {props.typeOfDrillsSelected.includes(props.value) ? (
          <Text>selected</Text>
        ) : null}
      </Card>
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
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
