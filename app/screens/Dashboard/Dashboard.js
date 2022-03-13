import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import axios from 'axios';
import {connect} from 'react-redux';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import OldWorkoutModal from './components/OldWorkoutModal';
import {setGames} from '../../../ducks/reducers/gamesReducer';
import {saveAverages, saveGoals} from '../../../ducks/reducers/seasonReducer';

const Dashboard = (props) => {
  const [previousWorkouts, setPreviousWorkouts] = useState([]);
  const [showOldWorkoutModal, setOldWorkoutModal] = useState(false);
  const [oldWorkout, setOldWorkout] = useState([]);
  const [dateSelected, setDateSelected] = useState();

  useEffect(() => {
    axios.get('http://localhost:4169/api/workout').then((res) => {
      setPreviousWorkouts(res.data);
    });
  }, []);

  const dayWorkout = (day) => {
    setOldWorkoutModal(false);
    let workout = previousWorkouts.filter((ele) => {
      let date = ele.date.slice(0, 10);
      return date === day.dateString;
    });
    setDateSelected(day);
    setOldWorkout(workout);
    setOldWorkoutModal(true);
  };

  const dates = previousWorkouts.map((ele) => {
    let date = ele.date.slice(0, 10);

    return {[date]: {selected: true, selectedColor: '#a8e0a3'}};
  });

  let stuff = dates.reduce(function (result, item) {
    let key = Object.keys(item)[0];
    result[key] = item[key];
    return result;
  }, {});

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <OldWorkoutModal
          isVisible={showOldWorkoutModal}
          workout={oldWorkout}
          date={dateSelected}
          cancel={() => setOldWorkoutModal(false)}
        /> */}
        <View style={styles.card}>
          <Calendar
            horizontal={true}
            enableSwipeMonths={true}
            markedDates={stuff}
            onDayPress={(day) => {
              dayWorkout(day);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {setGames, saveAverages, saveGoals})(
  Dashboard,
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    minHeight: 150,
    width: '100%',
    marginBottom: 15,
    padding: 8,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    shadowOpacity: 0.45,
    shadowRadius: 4.65,
    shadowColor: '#A9A9A9',
    shadowOffset: {width: 0, height: 3},

    //Android
    elevation: 6,
  },
  button: {
    marginTop: 10,
    paddingTop: 10,
    backgroundColor: '#F9A03F',
    borderRadius: 5,
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
  },
});
