import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import axios from 'axios';

import DrillCategories from './components/DrillCategories';

const Drills = () => {
  const [drills, setDrills] = useState();
  useEffect(() => {
    axios
      .get('http://localhost:4169/api/drills')
      .then((res) => setDrills(res.data));
  }, []);
  return (
    <SafeAreaView>
      <DrillCategories type="scoring" label="Scoring" />
      <DrillCategories
        type="three_point_shooting"
        label="Three Point Shooting"
      />
      <DrillCategories type="dribbling" label="Dribbling" />
      <DrillCategories type="free_throws" label="Free Throws" />
      <DrillCategories
        type="pick_and_roll_ball_handler"
        label="Pick And Roll Ball Handler"
      />
      <DrillCategories type="defense" label="Defense" />
    </SafeAreaView>
  );
};

export default Drills;
