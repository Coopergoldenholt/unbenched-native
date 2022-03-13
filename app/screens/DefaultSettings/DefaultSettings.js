import Axios from 'axios';
import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {connect} from 'react-redux';
import axios from 'axios';
import {URL} from '../../../config';

import {saveSession} from '../../../ducks/reducers/userReducer';
import {Button} from 'react-native-elements';

const DefaultSetting = (props) => {
  const [gymType, setGymType] = useState();

  const handleDefaultEntry = () => {
    axios.post(`${URL}/api/user/default-season`, {id: gymType}).then((res) => {
      props.saveSession(res.data);
    });
    props.navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Text
        style={{fontSize: 20, marginLeft: 28, marginTop: 15, marginBottom: 10}}>
        What equipment do you have?
      </Text>
      <View style={{marginLeft: 25, marginRight: 25}}>
        <DropDownPicker
          items={[
            {
              label: 'Full Gym (Weights, BenchPress, SquatRack, etc.)',
              value: 1,
            },
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
      </View>

      <View style={{alignItems: 'center', marginRight: 20, zIndex: -2}}>
        <Button
          title="Save"
          buttonStyle={{
            borderRadius: 3,
            backgroundColor: '#7392B7',
            marginTop: 25,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            width: 230,
            fontFamily: 'helvetica',
          }}
          onPress={() => handleDefaultEntry()}
          titleStyle={{fontFamily: 'helvetica'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default connect(null, {saveSession})(DefaultSetting);
