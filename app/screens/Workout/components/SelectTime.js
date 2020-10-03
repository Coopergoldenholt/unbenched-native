import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Switch,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';
import WorkoutModal from './WorkoutModal';
import CollectTime from './CollectTime';

const Workout = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [timeSelected, setTimeSelect] = useState(0);
  const [typeOfDrillsSelected, setDrillsSelected] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(typeOfDrillsSelected);
  console.log(timeSelected);
  console.log(props.workout);
  console.log(props.navigation);

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
  console.log(props.navigation);
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
  const typeOfDrills = [
    {label: 'Speed/Agility', value: 'speed'},
    {label: 'Scoring', value: 'scoring'},
    {label: '3 Point Shooting', value: 'three-shooting'},
    {label: 'Dribbling', value: 'dribbling'},
    {label: 'Defense', value: 'defense'},
    {label: 'Strength', value: 'strength'},
  ];

  const colletTimeDisplay = totalTime.map((ele) => {
    return <CollectTime time={ele.label} value={ele.value} />;
  });
  return (
    <ScrollView>
      {/* <CollectTime /> */}
      <View style={styles.timeContainer}>{colletTimeDisplay}</View>
      {/* <View>
      <Text>How Long Is Your Workout?</Text>
      <DropDownPicker
        items={totalTime}
        placeholder="Choose a time"
        defaultValue={null}
        multiple={true}
        // containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        containerStyle={{
          height: 40,
          marginBottom: 10,
          marginTop: 10,
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={(item) => setTimeSelect(item.value)}
      />
    </View> */}
      {/* <View>
        <Text>What do you want to work on?</Text> */}
      {/* <DropDownPicker
          items={typeOfDrills}
          multiple={true}
          multipleText="%d type(s) selected."
          min={0}
          max={10}
          defaultValue={0}
          containerStyle={{height: 40}}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          onChangeItem={(item) => setDrillsSelected(item)}
        /> */}
      {/* </View>
      <View style={styles.cancelContainer}>
        <Button
          title={'Cancel'}
          raised={true}
          onPress={() => props.setDisplayFalse(!props.display)}
        />
        <Button
          title={'Start a Workout'}
          raised={true}
          onPress={() => handleGenerateWorkout()}
        /> */}
      {/* </View> */}
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    workout: state.workout,
  };
};

export default connect(mapStateToProps)(Workout);

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
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
