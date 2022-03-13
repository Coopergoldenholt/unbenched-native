import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Alert, View} from 'react-native';
import {Button, Avatar} from 'react-native-elements';
import {connect} from 'react-redux';
import axios from 'axios';
import {URL} from '../../../config';

import {destroySession} from '../../../ducks/reducers/userReducer';

import DropDownPicker from 'react-native-dropdown-picker';

const User = (props) => {
  const [currentSeason, setCurrentSeason] = useState('19-20');
  const [seasons, setSeasons] = useState(['19-20', '18-19', 'summer 18-19']);
  const [seasonPicker, setSeasonPicker] = useState(null);
  const [displaySeasonModal, setDisplaySeasonModal] = useState(false);

  const seasonPickerItems = seasons.map((ele) => {
    return {label: ele, value: ele};
  });

  const defaultGym = () => {
    switch (props.user.athleteGymDefault) {
      case '1':
        return (
          <Text style={{fontSize: 20, fontFamily: 'helvetica'}}>Full Gym</Text>
        );
      case '2':
        return (
          <Text style={{fontSize: 20, fontFamily: 'helvetica'}}>Home Gym</Text>
        );
      case '3':
        return (
          <Text style={{fontSize: 20, fontFamily: 'helvetica'}}>Nothing</Text>
        );
    }
  };

  const logout = async () => {
    const sessionReturn = await axios
      .post(`${URL}/api/user/logout`)
      .then((res) => {
        props.destroySession();
      });
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 20,
        }}>
        <Avatar
          size="large"
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />
        <Text style={{fontSize: 30, fontFamily: 'helvetica'}}>
          {props.user.name}
        </Text>
      </View>
      <View style={{alignItems: 'flex-end', marginRight: 20}}>
        <Button
          title="Change Defaults"
          buttonStyle={{
            borderRadius: 3,
            backgroundColor: '#7392B7',
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            width: 160,
            fontFamily: 'helvetica',
          }}
          onPress={() => props.navigation.navigate('DefaultGym')}
          titleStyle={{fontFamily: 'helvetica'}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 20,
        }}>
        <Text style={{fontSize: 20, fontFamily: 'helvetica'}}>
          Default Gym:
        </Text>
        {defaultGym()}
      </View>
      <View style={{alignItems: 'center'}}>
        <Button
          buttonStyle={{
            borderRadius: 3,
            backgroundColor: '#7392B7',
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            width: 320,
          }}
          title="Log Out"
          onPress={() => logout()}
          titleStyle={{fontFamily: 'helvetica'}}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => state.user;

export default connect(mapStateToProps, {destroySession})(User);
