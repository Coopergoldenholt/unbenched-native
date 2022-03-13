import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import axios from 'axios';
import {URL} from '../../../config';

import {Button} from 'react-native-elements';
import DrillCategories from './components/DrillCategories';

const Drills = (props) => {
  const [drills, setDrills] = useState([]);
  const [workout, setWorkout] = useState([]);
  const [buildOwnWorkout, setBuildOwnWorkout] = useState(false);

  useEffect(() => {
    axios.get(`${URL}/api/drills`).then((res) => setDrills(res.data));
  }, []);

  useEffect(() => {}, [workout]);

  const addDrillToWorkout = (drill) => {
    const newWorkout = workout.filter((ele) => ele.id !== drill.id);
    if (newWorkout.length < workout.length) {
      console.log('hello');

      setWorkout(newWorkout);
    } else {
      setWorkout([...workout, drill]);
    }
  };

  const handleCancel = () => {
    setWorkout([]);
    setBuildOwnWorkout(false);
  };

  const handleWorkout = () => {
    props.navigation.navigate('DisplayWorkout', {workout: workout});
  };

  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <View>
        {buildOwnWorkout ? (
          <View>
            <Button onPress={() => handleCancel()} title="Cancel" />
            <Button onPress={() => handleWorkout()} title="Start Workout" />
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
          workout={workout}
        />
        <DrillCategories
          drills={drills}
          type="three_point_shooting"
          label="Three Point Shooting"
          navigation={props.navigation}
          addDrillToWorkout={addDrillToWorkout}
          buildOwnWorkout={buildOwnWorkout}
          workout={workout}
        />
        <DrillCategories
          type="dribbling"
          label="Dribbling"
          drills={drills}
          navigation={props.navigation}
          addDrillToWorkout={addDrillToWorkout}
          buildOwnWorkout={buildOwnWorkout}
          workout={workout}
        />
        <DrillCategories
          type="free_throws"
          label="Free Throws"
          drills={drills}
          navigation={props.navigation}
          addDrillToWorkout={addDrillToWorkout}
          buildOwnWorkout={buildOwnWorkout}
          workout={workout}
        />
        <DrillCategories
          type="pick_and_roll_ball_handler"
          label="Pick And Roll Ball Handler"
          drills={drills}
          navigation={props.navigation}
          addDrillToWorkout={addDrillToWorkout}
          buildOwnWorkout={buildOwnWorkout}
          workout={workout}
        />
        <DrillCategories
          type="defense"
          label="Defense"
          drills={drills}
          navigation={props.navigation}
          addDrillToWorkout={addDrillToWorkout}
          buildOwnWorkout={buildOwnWorkout}
          workout={workout}
        />
      </View>
    </ScrollView>
  );
};

export default Drills;
