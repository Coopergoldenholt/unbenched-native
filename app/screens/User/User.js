import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import CreateNewSeason from './components/CreateNewSeason';

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
      <Text>User</Text>
      {/* <Text>Current Season: {currentSeason}</Text>
      <DropDownPicker
        items={seasonPickerItems}
        defaultValue={currentSeason}
        placeholder="Seasons"
        containerStyle={{
          height: 40,
          width: 200,
          marginBottom: 10,
          marginTop: 10,
        }}
        onChangeItem={(item) => setSeasonPicker(item.value)}
      /> */}
      {/* {seasonPicker !== currentSeason ? (
        <TouchableOpacity>
          <Text>Confirm Change?</Text>
        </TouchableOpacity>
      ) : null}
      <TouchableOpacity onPress={() => setDisplaySeasonModal(true)}>
        <Text>Create New Season</Text>
      </TouchableOpacity>
      <CreateNewSeason
        display={displaySeasonModal}
        displayModal={setDisplaySeasonModal}
      /> */}
    </SafeAreaView>
  );
};

export default User;
