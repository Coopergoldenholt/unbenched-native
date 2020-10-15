import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ScoringImage from '../../../../assets/james-harden-socring.jpg';
import ThreeImage from '../../../../assets/steph-curry-three.jpg';
import DribbleImage from '../../../../assets/kyrie-irving-dribbling.jpg';
import FreeThrowImage from '../../../../assets/kyle-korver-free-throw.jpg';
import PickBallHandlerImage from '../../../../assets/jamal-murray-pick-and-roll.jpg';
import DefenseImage from '../../../../assets/kawhi-defense.jpg';

const CollectTime = (props) => {
  const stuff = () => {
    switch (props.value) {
      case 'scoring':
        return ScoringImage;
      case 'three-shooting':
        return ThreeImage;
      case 'dribbling':
        return DribbleImage;
      case 'free-throws':
        return FreeThrowImage;
      case 'pick-roll-ballhandler':
        return PickBallHandlerImage;
      case 'defense':
        return DefenseImage;
    }
  };
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => props.handleDrillSelect(props.value)}>
      <ImageBackground
        source={stuff()}
        style={{
          height: '100%',
          width: '100%',
          resizeMode: 'cover',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={
            props.typeOfDrillsSelected.includes(props.value)
              ? {
                  height: '100%',
                  width: '100%',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }
              : {
                  height: '100%',
                  width: '100%',
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }
          }>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            {props.typeOfWorkout}
          </Text>
          {props.typeOfDrillsSelected.includes(props.value) ? (
            // <Text>selected</Text>
            <View style={{position: 'absolute', top: 10}}>
              <Icon name="check-circle" size={30} color="white" />
            </View>
          ) : (
            <View style={{position: 'absolute', top: 10}}>
              <Icon name="circle" size={30} color="white" />
            </View>
          )}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CollectTime;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    // width: '30%',
    width: 150,
    height: 200,
    zIndex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    margin: 20,

    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7.49,
    elevation: 12,
    borderRadius: 5,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
