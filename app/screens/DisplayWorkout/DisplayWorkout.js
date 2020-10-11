import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

import {WebView} from 'react-native-webview';

const DisplayWorkout = (props) => {
  const [workoutDisplay, setWorkoutDisplay] = useState([]);
  const [workoutIndex, setWorkoutIndex] = useState(0);
  const {workout} = props.route.params;

  useEffect(() => {
    setWarmupFirst();
  }, []);

  const getWorkoutResults = () => {};

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
      // let results = axios
      //   .get(`http://localhost:4169/api/workout/results/${ele.id}`)
      //   .then((res) => res.data);
      // console.log(results);
      return (
        <View style={styles.card}>
          <View style={styles.videoContainer}>
            <Text>{ele.name}</Text>
            <WebView
              style={{flex: 1}}
              javaScriptEnabled={true}
              source={{
                uri: ele.url,
              }}
              // style={{
              //   width: 200,
              //   height: 200,
              //   backgroundColor: 'blue',
              //   marginTop: 20,
              // }}
            />

            <View>
              <View style={styles.previousWorkout}>
                {/* <Text>
                  Last Workout: {`${results.low_value}/${results.high_value}`}{' '}
                </Text> */}
                <Text>Percentage: </Text>
                <Text>43.2%</Text>
              </View>
              <View style={styles.previousWorkout}>
                <Text>Total: 78/154 </Text>
                <Text>Percentage: 50.1%</Text>
              </View>
            </View>
          </View>
        </View>
      );
    });

  return (
    <View style={{height: '100%', alignItems: 'center'}}>
      <ScrollView>
        {eachWorkout}
        <View style={styles.workoutButtonContainer}>
          <TouchableOpacity
            disabled={workoutIndex === 0 ? true : false}
            onPress={() => handleWorkoutPress(-1)}>
            <Text>Previous Workout</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={workoutIndex === workout.length - 1 ? true : false}
            onPress={() => handleWorkoutPress(1)}>
            <Text>Next Workout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DisplayWorkout;

const styles = StyleSheet.create({
  videoContainer: {
    height: 250,
    width: 300,
    backgroundColor: 'white',
  },
  previousWorkout: {
    flexDirection: 'row',
  },
  card: {
    height: 300,
    width: 350,
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
    justifyContent: 'space-around',
  },
});
