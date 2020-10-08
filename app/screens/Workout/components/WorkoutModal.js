import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Switch,
} from 'react-native';
import {Button} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from 'react-native-modal';
import axios from 'axios';
import {connect} from 'react-redux';

import {startWorkout} from '../../../../ducks/reducers/workoutReducer';

import DisplayTypeOfWorkout from './DisplayTypeOfWorkouts';

const WorkoutSelection = (props) => {
  const [timeSelected, setTimeSelect] = useState(0);
  const [typeOfDrillsSelected, setDrillsSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [typeOfDrills, setDrills] = useState(props.route.params.drills);

  const handleGenerateWorkout = async () => {
    // setLoading(true);
    // axios
    //   .get(
    //     `http://localhost:4169/api/workout/custom?time=${timeSelected}&workoutItems=${typeOfDrillsSelected}`,
    //   )
    //   .then((res) => props.startWorkout(res.data));
    // setLoading(false);
    props.navigation.navigate('Workout Display');
  };

  const totalTime = [
    {label: '15 Minutes', value: 15},
    {label: '30 Minutes', value: 30},
    {label: '45 Minutes', value: 45},
    {label: '1 Hour', value: 60},
    {label: '1 Hour 15 Minutes', value: 75},
    {label: '1 Hour 30 Minutes', value: 90},
    {label: '1 Hour 45 Minutes', value: 105},
    {label: '2 Hours', value: 120},
  ];

  const handleDrillSelect = (workoutValue) => {
    if (typeOfDrillsSelected.includes(workoutValue)) {
      const index = typeOfDrillsSelected.indexOf(workoutValue);
      let newArr = typeOfDrillsSelected;
      newArr.splice(index, 1);
      let drills = props.route.params.drills;

      setDrillsSelected(newArr);
      if (props.route.params.type === 'strength') {
        setDrills([
          {label: 'Biceps', value: 'biceps'},
          {label: 'Triceps', value: 'Tricpes'},
          {label: 'Vertical', value: 'vertical'},
        ]);
      } else {
        setDrills([
          {label: 'Speed/Agility', value: 'speed'},
          {label: 'Scoring', value: 'scoring'},
          {label: '3 Point Shooting', value: 'three-shooting'},
          {label: 'Free Throw Shooting', value: 'free-throws'},
          {
            label: 'Pick and Roll Ballhandler',
            value: 'pick-roll-ballhandler',
          },
          {label: 'Pick and Roll Big Man', value: 'pick-roll-bigman'},
          {label: 'Post Moves', value: 'post-moves'},
          {label: 'Dribbling', value: 'dribbling'},
          {label: 'Defense', value: 'defense'},
          {label: 'Strength', value: 'strength'},
        ]);
      }
    } else {
      setDrillsSelected([...typeOfDrillsSelected, workoutValue]);
      setDrills(typeOfDrills);
    }
  };

  const typeOfWorkouts = typeOfDrills.map((ele) => {
    return (
      <DisplayTypeOfWorkout
        typeOfDrillsSelected={typeOfDrillsSelected}
        handleDrillSelect={handleDrillSelect}
        typeOfWorkout={ele.label}
        value={ele.value}
      />
    );
  });

  return (
    <>
      <ScrollView>
        <View>
          <Text>How Long Is Your Workout?</Text>

          <DropDownPicker
            items={totalTime}
            placeholder="Choose a time"
            defaultValue={null}
            containerStyle={{height: 40, zIndex: 10000}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={(item) => setTimeSelect(item.value)}
          />
        </View>

        <View style={styles.workoutsContainer}>{typeOfWorkouts}</View>
        <View style={styles.cancelContainer}>
          <Button
            title={'Start Workout'}
            raised={true}
            onPress={() => handleGenerateWorkout()}
          />
        </View>
      </ScrollView>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    workout: state.workout,
  };
};

export default connect(mapStateToProps, {startWorkout})(WorkoutSelection);

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    height: '80%',
    backgroundColor: 'white',
  },

  inputContainer: {
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  //Buttons
  button: {
    paddingTop: 3,
    marginLeft: 10,
    backgroundColor: '#F9A03F',
    borderRadius: 5,
    alignItems: 'center',
    padding: 3,
    height: 30,
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 50,
  },
  buttonCancel: {
    paddingTop: 3,
    marginLeft: 10,
    backgroundColor: '#dea5a4',
    borderRadius: 5,
    alignItems: 'center',
    padding: 3,
    height: 30,
    justifyContent: 'center',
    width: 100,
  },
  buttonConfirm: {
    paddingTop: 3,
    marginLeft: 10,
    backgroundColor: '#7392B7',
    borderRadius: 5,
    alignItems: 'center',
    padding: 3,
    height: 30,
    justifyContent: 'center',
    width: 100,
  },
  opponentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  opponentText: {
    fontSize: 50,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cancelContainer: {
    zIndex: -1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  workoutsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
