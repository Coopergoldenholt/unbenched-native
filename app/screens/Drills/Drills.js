import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import axios from 'axios';

import DrillCategories from './components/DrillCategories';

const Drills = (props) => {
  const [drills, setDrills] = useState([]);
  console.log(props.navigation);
  useEffect(() => {
    axios
      .get('http://localhost:4169/api/drills')
      .then((res) => setDrills(res.data));
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <DrillCategories
        drills={drills}
        type="scoring"
        label="Scoring"
        navigation={props.navigation}
      />
      <DrillCategories
        drills={drills}
        type="three_point_shooting"
        label="Three Point Shooting"
        navigation={props.navigation}
      />
      <DrillCategories type="dribbling" label="Dribbling" drills={drills} />
      <DrillCategories
        type="free_throws"
        label="Free Throws"
        drills={drills}
        navigation={props.navigation}
      />
      <DrillCategories
        type="pick_and_roll_ball_handler"
        label="Pick And Roll Ball Handler"
        drills={drills}
        navigation={props.navigation}
      />
      <DrillCategories
        type="defense"
        label="Defense"
        drills={drills}
        navigation={props.navigation}
      />
    </SafeAreaView>
  );
};

export default Drills;
