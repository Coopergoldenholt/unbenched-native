import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Feather';

import {WebView} from 'react-native-webview';

import WorkoutCard from './components/WorkoutCard';

const DisplayWorkout = (props) => {
  const [workoutDisplay, setWorkoutDisplay] = useState([]);
  const [workoutIndex, setWorkoutIndex] = useState(0);
  const {workout} = props.route.params;

  useEffect(() => {
    setWarmupFirst();
  }, []);

  let setWarmupFirst = async () => {
    let workoutTwo = workout;
    let workoutType = await workout.map((ele) => {
      return ele.type;
    });

    if (workoutType.indexOf('warmup') > 0) {
      let index = await workoutType.indexOf('warmup');

      let [warmup] = await workout.splice(index, 1);

      await workout.unshift(warmup);

      setWorkoutDisplay(workout);
    } else {
      setWorkoutDisplay(workout);
    }
  };

  const handleWorkoutPress = (num) => {
    setWorkoutIndex(workoutIndex + num);
  };

  const eachWorkout = workoutDisplay
    .filter((ele, indx) => {
      return indx === workoutIndex;
    })
    .map((ele) => {
      console.log(ele);
      return (
        <View style={styles.card}>
          <WorkoutCard
            time={ele.time}
            name={ele.name}
            url={ele.url}
            id={ele.id}
          />
        </View>
      );
    });

  return (
    <View style={{height: '100%', alignItems: 'center'}}>
      <ScrollView style={{width: '100%'}}>
        {eachWorkout}
        <View style={styles.workoutButtonContainer}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              // justifyContent: 'flex-start',
              alignItems: 'center',
            }}
            disabled={workoutIndex === 0 ? true : false}
            onPress={() => handleWorkoutPress(-1)}>
            <Icon style={{marginRight: 5}} name="arrow-left-circle" size={30} />
            <Text>Previous Drill</Text>
          </TouchableOpacity>
          <Text>
            {workoutIndex + 1}/{workout.length}
          </Text>
          <TouchableOpacity
            style={{
              marginRight: 10,
              flexDirection: 'row',

              alignItems: 'center',
            }}
            disabled={workoutIndex === workout.length - 1 ? true : false}
            onPress={() => handleWorkoutPress(1)}>
            <Text>Next Drill</Text>
            <Icon style={{marginLeft: 5}} name="arrow-right-circle" size={30} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DisplayWorkout;

const styles = StyleSheet.create({
  previousWorkout: {
    flexDirection: 'row',
  },
  card: {
    height: 500,
    // width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    borderRadius: 5,
  },
  workoutButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
