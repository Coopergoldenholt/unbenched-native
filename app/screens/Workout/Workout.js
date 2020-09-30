import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Switch,
  View,
  StyleSheet,
} from 'react-native';
import WorkoutModal from './components/WorkoutModal';

const Workout = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <SafeAreaView>
      {/* <View style={styles.switchContainer}>
        <Text>Customize your Workout</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
      </View> */}
      <WorkoutModal />
    </SafeAreaView>
  );
};

export default Workout;

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
});
