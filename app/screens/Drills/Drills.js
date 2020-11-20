import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import axios from 'axios';

import {Button} from 'react-native-elements';
import DrillCategories from './components/DrillCategories';

const Drills = (props) => {
  const [drills, setDrills] = useState([]);
  const [workout, setWorkout] = useState([]);
  const [buildOwnWorkout, setBuildOwnWorkout] = useState(false);

  useEffect(() => {
    axios
      .get('http://138.68.247.11:4169/api/drills')
      .then((res) => setDrills(res.data));
  }, []);

  useEffect(() => {}, [workout]);

  const addDrillToWorkout = (drill) => {
    let work = workout;
    work.push(drill);
    setWorkout(work);
  };

  const handleCancel = () => {
    setWorkout([]);
    setBuildOwnWorkout(false);
  };

  console.log(workout);
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View>
        {buildOwnWorkout ? (
          <View>
            <Button onPress={() => handleCancel()} title="Cancel" />
          </View>
        ) : (
          <Button
            title="Build Your Own Workout"
            onPress={() => setBuildOwnWorkout(true)}
          />
        )}
      </View>
      <View>
        <DrillCategories
          drills={drills}
          type="scoring"
          label="Scoring"
          navigation={props.navigation}
          addDrillToWorkout={addDrillToWorkout}
          buildOwnWorkout={buildOwnWorkout}
        />
        <DrillCategories
          drills={drills}
          type="three_point_shooting"
          label="Three Point Shooting"
          navigation={props.navigation}
          addDrillToWorkout={addDrillToWorkout}
          buildOwnWorkout={buildOwnWorkout}
        />
        <DrillCategories
          type="dribbling"
          label="Dribbling"
          drills={drills}
          navigation={props.navigation}
          addDrillToWorkout={addDrillToWorkout}
          buildOwnWorkout={buildOwnWorkout}
        />
        <DrillCategories
          type="free_throws"
          label="Free Throws"
          drills={drills}
          navigation={props.navigation}
          addDrillToWorkout={addDrillToWorkout}
          buildOwnWorkout={buildOwnWorkout}
        />
        <DrillCategories
          type="pick_and_roll_ball_handler"
          label="Pick And Roll Ball Handler"
          drills={drills}
          navigation={props.navigation}
          addDrillToWorkout={addDrillToWorkout}
          buildOwnWorkout={buildOwnWorkout}
        />
        <DrillCategories
          type="defense"
          label="Defense"
          drills={drills}
          navigation={props.navigation}
          addDrillToWorkout={addDrillToWorkout}
          buildOwnWorkout={buildOwnWorkout}
        />
      </View>
    </SafeAreaView>
  );
};

export default Drills;
