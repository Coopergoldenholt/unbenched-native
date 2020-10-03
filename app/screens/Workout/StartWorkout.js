import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {Tile, Button, Icon, Card} from 'react-native-elements';
// import Card from '../../components/Card';

const StartWorkout = (props) => {
  return (
    <ImageBackground
      style={styles.image}
      source={require('../../../assets/workout-picture.jpg')}>
      {/* <Card.Image
        style={{height: '100%'}}
        containerStyle={{height: '100%'}}
        source={require('../../../assets/workout-picture.jpg')}
      /> */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Start a Workout</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          // icon={<Icon name="code" color="#ffffff" />}
          onPress={() => props.navigation.navigate('SelectTime')}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            width: '100%',
          }}
          title="Start Now"
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
