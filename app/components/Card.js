import React from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {shape, string, number} from 'prop-types';
import {Thumbnail} from 'react-native-thumbnail-video';

const Card = (props) => {
  // console.log(props.index);
  // <View style={styles.card}>
  return (
    <Thumbnail
      imageWidth={300}
      url="https://www.youtube.com/watch?v=-RjJtO51ykY&ab_channel=MarkRober"
    />
  );
  // </View>
};

Card.propTypes = {
  card: shape({
    photo: ImageSourcePropType,
    name: string,
    age: number,
  }).isRequired,
};

export default Card;

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    /*
      Setting the height according to the screen height,
      also could be fixed value orbased on percentage.
      In this example this worked well on Android and iOS.
    */
    height: height - 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  image: {
    borderRadius: 5,
    flex: 1,
    width: '100%',
  },
  photoDescriptionContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: '100%',
    position: 'absolute',
    left: 10,
    bottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontFamily: 'Avenir',
    textShadowColor: 'black',
    textShadowRadius: 10,
  },
});
