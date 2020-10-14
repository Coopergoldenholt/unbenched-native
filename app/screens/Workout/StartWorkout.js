import React, {useState} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {Tile, Button, Icon, Card} from 'react-native-elements';

const StartWorkout = (props) => {
  const [timeSelected, selectTime] = useState();
  const [typeOfWorkouts, setTypeOfWorkouts] = useState([]);

  return (
    <ImageBackground
      style={styles.image}
      source={require('../../../assets/workout-picture.jpg')}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Start a Workout</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() =>
            props.navigation.navigate('Select Workout', {
              drills: [
                {label: 'Scoring', value: 'scoring'},
                {label: '3 Point Shooting', value: 'three-shooting'},
                {label: 'Dribbling', value: 'dribbling'},
                {label: 'Free Throw Shooting', value: 'free-throws'},
                {
                  label: 'Pick and Roll Ballhandler',
                  value: 'pick-roll-ballhandler',
                },

                {label: 'Defense', value: 'defense'},
              ],
              type: 'basketball',
            })
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            width: '100%',
          }}
          title="Start Basketball Workout"
        />
        <Button
          // icon={<Icon name="code" color="#ffffff" />}
          onPress={() =>
            props.navigation.navigate('Select Workout', {
              drills: [
                {label: 'Biceps', value: 'biceps'},
                {label: 'Triceps', value: 'Tricpes'},
                {label: 'Vertical', value: 'vertical'},
              ],
              type: 'strength',
            })
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            width: '100%',
          }}
          title="Start Strength Workout"
        />
      </View>
    </ImageBackground>
  );
};

export default StartWorkout;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
  buttonContainer: {
    // width: '100%',
    // height: '90%',
    // position: 'absolute',
    // justifyContent: 'flex-end',
    marginTop: 10,
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100%',
  },
});
