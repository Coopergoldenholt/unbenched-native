import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const DrillDisplay = (props) => {
  return (
    <View style={styles.container}>
      {props.buildOwnWorkout ? (
        <TouchableOpacity onPress={() => props.addDrillToWorkout(props.drill)}>
          <Icon name={'plus'} size={30} color="black" />
        </TouchableOpacity>
      ) : null}
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Drill', {
            drill: props.drill,
            name: props.title,
          })
        }
        style={styles.drillContainer}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 18}}>{props.title}</Text>
          <Text>Estimated Time: {props.drill.time}</Text>
        </View>
        <Icon name={'chevron-right'} size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default DrillDisplay;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    marginLeft: 30,
    marginRight: 15,
    marginBottom: 10,
  },
  drillContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderBottomWidth: 1,
  },
});
