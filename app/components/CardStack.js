import React from 'react';
import Swiper from 'react-native-deck-swiper';
import {Button, StyleSheet, Text, View} from 'react-native';

const CardStack = () => {
  return (
    <Swiper
      cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
      renderCard={(card) => {
        return (
          <View style={styles.card}>
            <Text style={styles.text}>{card}</Text>
          </View>
        );
      }}
      onSwiped={(cardIndex) => {
        console.log(cardIndex);
      }}
      onSwipedAll={() => {
        console.log('onSwipedAll');
      }}
      cardIndex={0}
      backgroundColor={'white'}
      stackSeparation={0}
      stackScale={0}
      stackSize={3}>
      {/* <Button
          onPress={() => {
            console.log('oulala');
          }}
          title="Press me">
          You can press me
        </Button> */}
    </Swiper>
  );
};

export default CardStack;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 100,
    backgroundColor: 'white',
  },
  card: {
    height: 200,
    // flex: 1,
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    // fontSize: 50,
    backgroundColor: 'transparent',
  },
});
