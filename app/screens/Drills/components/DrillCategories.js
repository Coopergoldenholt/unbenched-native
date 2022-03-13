import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import DrillDisplay from './DrillDisplay';

const DrillCategories = (props) => {
  const [selected, setSelected] = useState(false);

  const filterDrills = props.drills
    .filter((ele) => {
      return ele.type === props.type;
    })
    .map((ele) => {
      return (
        <DrillDisplay
          added={props.workout.filter((workoutDrill) => {
            return workoutDrill.id === ele.id;
          })}
          drill={ele}
          navigation={props.navigation}
          title={ele.name}
          addDrillToWorkout={props.addDrillToWorkout}
          buildOwnWorkout={props.buildOwnWorkout}
          workout={props.workout}
        />
      );
    });

  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setSelected(!selected)}>
        <Text style={styles.text}>{props.label}</Text>

        <Icon
          name={selected ? 'chevron-down' : 'chevron-right'}
          size={30}
          color="black"
        />
      </TouchableOpacity>
      {selected ? filterDrills : null}

      {/* <DrillCategories /> */}
    </View>
  );
};

export default DrillCategories;

const styles = StyleSheet.create({
  parentContainer: {
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 20,
  },
});
