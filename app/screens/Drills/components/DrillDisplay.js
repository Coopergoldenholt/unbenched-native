import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const DrillDisplay = (props) => {
  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.container}>
      {props.buildOwnWorkout ? (
        !props.added[0] ? (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => props.addDrillToWorkout(props.drill)}>
            <Icon name={'plus'} size={30} color="black" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => props.addDrillToWorkout(props.drill)}>
            <Icon name={'minus'} size={30} color="black" />
          </TouchableOpacity>
        )
      ) : null}
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Drill', {
            drill: props.drill,
            name: props.title,
          })
        }
        style={styles.drillContainer}>
        <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
          <Text style={{fontSize: 18}}>{props.title}</Text>
          <View style={{alignItems: 'flex-start'}}>
            <Text>Estimated Time: {props.drill.time}</Text>
          </View>
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
    // alignItems: 'center',
    // justifyContent: 'flex-start',

    paddingLeft: 20,
    paddingRight: 15,
    paddingBottom: 15,
  },
  iconContainer: {
    paddingRight: 5,
  },
  drillContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
});
