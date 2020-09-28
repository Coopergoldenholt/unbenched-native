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

const EnterGameModule = (props) => {
  const [timeSelected, setTimeSelect] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);

  const totalTime = [
    {label: '30 Minutes', value: 30},
    {label: '45 Minutes', value: 45},
    {label: '1 Hour', value: 60},
    {label: '1 Hour 15 Minutes', value: 75},
    {label: '1 Hour 30 Minutes', value: 90},
    {label: '1 Hour 45 Minutes', value: 105},
    {label: '2 Hours', value: 120},
  ];

  return (
    <View>
      <View style={styles.switchContainer}>
        <Text>Do you want to create your own workout?</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
      </View>
      <Text>How Long Is Your Workout?</Text>
      <DropDownPicker
        items={totalTime}
        placeholder="Choose a time"
        defaultValue={null}
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
      <View style={styles.cancelContainer}>
        <Button
          title={'Cancel'}
          raised={true}
          onPress={() => props.setDisplayFalse(!props.display)}
        />
        <Button
          title={'Start a Workout'}
          raised={true}
          onPress={() => props.setDisplayFalse(!props.display)}
        />
      </View>
    </View>
  );
};

export default EnterGameModule;

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
