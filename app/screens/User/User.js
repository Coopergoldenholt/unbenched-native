import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Alert} from 'react-native';
import {Button, Avatar} from 'react-native-elements';

import DropDownPicker from 'react-native-dropdown-picker';

const User = () => {
  const [currentSeason, setCurrentSeason] = useState('19-20');
  const [seasons, setSeasons] = useState(['19-20', '18-19', 'summer 18-19']);
  const [seasonPicker, setSeasonPicker] = useState(null);
  const [displaySeasonModal, setDisplaySeasonModal] = useState(false);

  const seasonPickerItems = seasons.map((ele) => {
    return {label: ele, value: ele};
  });

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <Avatar
        size="large"
        rounded
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
      />
      <Text>Cooper Holt</Text>
      <Button title="Log Out" />
    </SafeAreaView>
  );
};

export default User;
