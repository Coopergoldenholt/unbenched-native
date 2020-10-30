import React, {useState} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {Tile, Button, Icon, Card} from 'react-native-elements';
import {connect} from 'react-redux';

const StartWorkout = (props) => {
  const [timeSelected, selectTime] = useState();
  const [typeOfWorkouts, setTypeOfWorkouts] = useState([]);

  return (
    <ImageBackground
      style={styles.image}
      source={require('../../../assets/background.jpg')}>
      {/* <View style={styles.textContainer}>
        <Text style={styles.text}>Start a Workout</Text>
      </View> */}
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
            borderRadius: 3,
            backgroundColor: '#7392B7',
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            width: 300,
          }}
          title="Basketball Training"
          titleStyle={{color: 'white'}}
        />
        <Button
          // icon={<Icon name="code" color="#ffffff" />}
          onPress={() =>
            props.navigation.navigate('Select Workout', {
              drills: [
                {
                  label: 'Strength',
                  value: 'strength',
                  types: [
                    {label: 'Upper Body', value: 'upperBody'},
                    {label: 'Lower Body', value: 'lowerBack'},
                  ],
                },
                {label: 'Triceps', value: 'Tricpes'},
                {label: 'Vertical', value: 'vertical'},
              ],
              type: 'strength',
            })
          }
          buttonStyle={{
            backgroundColor: '#7392B7',
            borderRadius: 3,
            marginTop: 15,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            width: 300,
          }}
          titleStyle={{color: 'white'}}
          title="Athlete Training"
        />
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => state.user;

export default connect(mapStateToProps)(StartWorkout);

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
    height: '80%',
    // position: 'absolute',
    justifyContent: 'flex-end',
    marginTop: 10,
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100%',
  },
});
