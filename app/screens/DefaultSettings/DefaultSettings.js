import Axios from 'axios';
import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {connect} from 'react-redux';
import axios from 'axios';

import {saveSession} from '../../../ducks/reducers/userReducer';
import {Button} from 'react-native-elements';

const DefaultSetting = (props) => {
  const [gymType, setGymType] = useState();

  const handleDefaultEntry = () => {
    axios
      .post('http://localhost:4169/api/user/default-season', {id: gymType})
      .then((res) => {
        console.log(res.data);
        props.saveSession(res.data);
      });
  };

  return (
    <SafeAreaView>
      <Text>
        Let us know what kind of gym equipemnt you have for your Athleate
        Training
      </Text>
      <DropDownPicker
        items={[
          {label: 'Full Gym (Weights, BenchPress, SquatRack, etc.)', value: 1},
          {label: 'Home Gym (Some Dumbells, Treadmill, etc)', value: 2},
          {label: 'Nothing', value: 3},
        ]}
        defaultValue={null}
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={(item) => setGymType(item.value)}
      />
      <Button title="Select" onPress={() => handleDefaultEntry()} />
    </SafeAreaView>
  );
};

export default connect(null, {saveSession})(DefaultSetting);
