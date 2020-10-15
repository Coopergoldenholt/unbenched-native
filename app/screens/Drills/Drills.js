import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import axios from 'axios';

import DrillCategories from './components/DrillCategories';

const Drills = () => {
  const [drills, setDrills] = useState();
  useEffect(async () => {
    await axios
      .get('http://localhost:4169/api/drills')
      .then((res) => setDrills(res.data));
  }, []);
  return (
    <SafeAreaView>
      <DrillCategories drills={drills} type="scoring" label="Scoring" />
      <DrillCategories
        drills={drills}
        type="three_point_shooting"
        label="Three Point Shooting"
      />
      <DrillCategories type="dribbling" label="Dribbling" drills={drills} />
      <DrillCategories type="free_throws" label="Free Throws" drills={drills} />
      <DrillCategories
        type="pick_and_roll_ball_handler"
        label="Pick And Roll Ball Handler"
        drills={drills}
      />
      <DrillCategories type="defense" label="Defense" drills={drills} />
    </SafeAreaView>
  );
};

export default Drills;
