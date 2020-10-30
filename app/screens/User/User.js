import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Alert, View} from 'react-native';
import {Button, Avatar} from 'react-native-elements';
import {connect} from 'react-redux';

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
        return <Text>Full Gym</Text>;
      case '2':
        return <Text>Home Gym</Text>;
      case '3':
        return <Text>Nothing</Text>;
    }
  };

  console.log(props.user.athleteGymDefault);

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View>
        <Avatar
          size="large"
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />
        <Text>{props.user.name}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        {defaultGym()}
        <Button
          title="Change Default Gym"
          onPress={() => props.navigation.navigate('DefaultGym')}
        />
      </View>
      <Button title="Log Out" />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => state.user;

export default connect(mapStateToProps)(User);
