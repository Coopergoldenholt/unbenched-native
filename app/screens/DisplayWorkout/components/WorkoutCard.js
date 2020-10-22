import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
import InsertWorkoutModal from '../../Drills/components/EnterDrillStatsModal';
import {Button} from 'react-native-elements';
import {WebView} from 'react-native-webview';

const WorkoutCard = (props) => {
  const [previousWorkouts, setPreviousWorkouts] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [lowValue, setLowValue] = useState(0);
  const [highValue, setHighValue] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:4169/api/workout/results/${props.id}`)
      .then((res) => setPreviousWorkouts(res.data));
  }, [props.id]);

  let totalHigh = previousWorkouts.reduce((acc, ele) => {
    return (acc += parseInt(ele.high_value));
  }, 0);

  let totalLow = previousWorkouts.reduce((acc, ele) => {
    return (acc += parseInt(ele.low_value));
  }, 0);

  const perc = Math.round((totalLow / totalHigh) * 10000) / 100;

  const completedDrill = async () => {
    console.log('here');
    setDisplayModal(false);
    await axios
      .post(`http://localhost:4169/api/workout/complete`, {
        lowValue: lowValue,
        highValue: highValue,
        workoutId: props.id,
      })
      .then((res) => console.log(res.data));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{props.name}</Text>
      </View>
      <View style={styles.videoContainer}>
        <WebView
          style={{flex: 1}}
          javaScriptEnabled={true}
          source={{
            uri: props.url,
          }}
          // style={{
          //   width: 200,
          //   height: 200,
          //   backgroundColor: 'blue',
          //   marginTop: 20,
          // }}
        />
      </View>

      {previousWorkouts[0] ? (
        <SafeAreaView>
          <View style={styles.previousWorkout}>
            <Text style={styles.text}>
              Last Workout:{' '}
              {`${previousWorkouts[0].low_value}/${previousWorkouts[0].high_value}`}{' '}
            </Text>
            {/* <Text>Percentage: </Text> */}
            <Text style={styles.text}>
              {Math.round(
                (previousWorkouts[0].low_value /
                  previousWorkouts[0].high_value) *
                  10000,
              ) / 100}
              %
            </Text>
          </View>
          <View style={styles.previousWorkout}>
            <Text style={styles.text}>
              Total: {totalLow}/{totalHigh}{' '}
            </Text>
            <Text style={styles.text}>{perc}%</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Button
              onPress={() => setDisplayModal(!displayModal)}
              buttonStyle={{
                backgroundColor: '#7392B7',
                borderRadius: 3,
                marginTop: 15,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                width: 300,
              }}
              titleStyle={{color: 'black'}}
              title="Insert Drill"
            />
          </View>
          <InsertWorkoutModal
            display={displayModal}
            setModalVisibility={setDisplayModal}
            completedDrill={completedDrill}
            setLowValue={setLowValue}
            setHighValue={setHighValue}
          />
        </SafeAreaView>
      ) : null}
    </View>
  );
};

export default WorkoutCard;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    // backgroundColor: 'white',
  },
  videoContainer: {
    height: 300,
    // width: 400,
    width: '100%',
    backgroundColor: 'white',
  },
  previousWorkout: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 20,
  },
  headerContainer: {
    alignItems: 'center',
    margin: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
