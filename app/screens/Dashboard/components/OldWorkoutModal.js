import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import axios from 'axios';
import {ListItem, Avatar} from 'react-native-elements';

const OldWorkoutModal = (props) => {
  console.log(props.workout);

  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const totalTime = props.workout.reduce((acc, ele) => {
    return (acc += ele.time);
  }, 0);
  console.log(totalTime);

  const workoutDisplay = () =>
    props.workout.map((ele) => {
      console.log(ele);
      return (
        <ListItem
          bottomDivider
          friction={90} //
          tension={100} // These props are passed to the parent component (here TouchableScale)
          activeScale={0.95}>
          <ListItem.Content>
            <ListItem.Title>{ele.name}</ListItem.Title>
            {ele.workout_data ? (
              <Text>
                {ele.low_value}/{ele.high_value}
              </Text>
            ) : null}
            <Text>Estimated Time: {ele.time}</Text>
          </ListItem.Content>
        </ListItem>
      );
    });

  return (
    <Modal
      style={{justifyContent: 'flex-end', margin: 0, borderRadius: 10}}
      visible={props.isVisible}
      animationType="slide">
      <View style={{backgroundColor: 'white', height: '50%'}}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.sideButtonContainer}
            onPress={props.cancel}>
            <Text>Close</Text>
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {props.date.day} {months[props.date.month - 1]}, {props.date.year}
            </Text>
            {props.workout[0] ? (
              <Text style={styles.title}>Total Time: {totalTime}</Text>
            ) : null}
          </View>
          <TouchableOpacity
            style={styles.sideButtonContainer}
            onPress={props.onPressRightButton}>
            <Text>Start Workout</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View>{workoutDisplay()}</View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default OldWorkoutModal;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 75,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  sideButtonContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
