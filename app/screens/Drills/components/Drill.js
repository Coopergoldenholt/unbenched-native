import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import axios from 'axios';
import {Button} from 'react-native-elements';
import {WebView} from 'react-native-webview';

import Modal from './EnterDrillStatsModal';
import {set} from 'react-native-reanimated';

const Drill = (props) => {
  const {drill} = props.route.params;
  const [previousWorkouts, setPreviousWorkouts] = useState([]);
  const [isModalVisible, setModalVisibility] = useState(false);
  const [lowValue, setLowValue] = useState();
  const [highValue, setHighValue] = useState();
  const [videoLoading, setVideoLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://138.68.247.11:4169/api/workout/results/${drill.id}`)
      .then((res) => {
        setPreviousWorkouts(res.data);
      });
  }, [props.id]);

  let totalHigh = previousWorkouts.reduce((acc, ele) => {
    return (acc += parseInt(ele.high_value));
  }, 0);

  let totalLow = previousWorkouts.reduce((acc, ele) => {
    return (acc += parseInt(ele.low_value));
  }, 0);

  // console.log(previousWorkouts);
  // console.log(totalHigh);

  const perc = Math.round((totalLow / totalHigh) * 10000) / 100;

  const completedDrill = async () => {
    setModalVisibility(false);
    await axios
      .post(`http://138.68.247.11:4169/api/workout/complete`, {
        lowValue: lowValue,
        highValue: highValue,
        workoutId: drill.id,
      })
      .then((res) => console.log(res.data));
  };

  return previousWorkouts ? (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{props.name}</Text>
      </View>
      <View style={styles.videoContainer}>
        <WebView
          style={{flex: 1}}
          javaScriptEnabled={true}
          source={{
            uri: drill.url,
          }}
          onLoad={() => setVideoLoading(false)}
          // style={{
          //   width: 200,
          //   height: 200,
          //   backgroundColor: 'blue',
          //   marginTop: 20,
          // }}
        />
        {videoLoading ? (
          <ActivityIndicator
            style={{position: 'absolute', top: 140, left: 190}}
            size="large"
          />
        ) : null}
      </View>
      <View style={{alignItems: 'center', top: 10, marginBottom: 10}}>
        <Text>{`Estimated Time: ${drill.time}`}</Text>
      </View>
      {drill.workout_data ? (
        previousWorkouts[0] ? (
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
          </SafeAreaView>
        ) : (
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 20}}>No Data On This Drill</Text>
          </View>
        )
      ) : null}
      {drill.workout_data ? (
        <View>
          <Button
            style={{marginTop: 10, alignItems: 'center'}}
            onPress={() => setModalVisibility(!isModalVisible)}
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
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20}}>Sorry You Can't Track This Drill</Text>
        </View>
      )}
      {isModalVisible ? (
        <Modal
          lowValueName={drill.low_value_name}
          highValueName={drill.high_value_name}
          completedDrill={completedDrill}
          setHighValue={setHighValue}
          setLowValue={setLowValue}
          setModalVisibility={setModalVisibility}
          display={isModalVisible}
        />
      ) : null}
    </View>
  ) : (
    <ActivityIndicator />
  );
};

export default Drill;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
