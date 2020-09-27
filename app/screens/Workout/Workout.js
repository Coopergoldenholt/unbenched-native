import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import WorkoutModal from './components/WorkoutModal';

const Workout = () => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => setDisplayModal(!displayModal)}>
        <Text>Start a Workout</Text>
        <WorkoutModal
          display={displayModal}
          setDisplayFalse={setDisplayModal}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Workout;
