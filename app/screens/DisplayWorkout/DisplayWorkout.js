import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';

const DisplayWorkout = (props) => {
  const [workoutDisplay, setWorkoutDisplay] = useState([]);
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
      console.log('here');
      setWorkoutDisplay(workout);
    }
  };
  console.log(workoutDisplay);

  const eachWorkout = workoutDisplay.map((ele) => {
    return (
      <View style={styles.card}>
        <View style={styles.videoContainer}>
          <Text>{ele.name}</Text>
          <WebView
            style={{flex: 1}}
            javaScriptEnabled={true}
            source={{
              uri: 'https://www.youtube.com/embed/TXZED8duLxI',
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
              <Text>Last Workout: 32/74 </Text>
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
      <ScrollView>{eachWorkout}</ScrollView>
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
});
