import React, {useState} from 'react';
import Swiper from 'react-native-deck-swiper';
import {Button, StyleSheet, Text, View} from 'react-native';

const CardStack = () => {
  const [cardDisplay, setCardDisplay] = useState(0);
  const [cards, setCards] = useState([]);

  // const displayCard =

  return (
    <View style={styles.container}>
      <Swiper
        cards={[
          'DO',
          'MORE',
          'OF',
          'WHAT',
          'MAKES',
          'YOU',
          'HAPPY',
          'Stuff',
          'Stuff',
          'Stuff',
          'Stuff',
          'Stuff',
          'Stuff',
          'Stuff',
          'Stuff',
          'Stuff',
          'Stuff',
          'Stuff',
          'Stuff',
          'Stuff',
          'Stuff',
          'Stuff',
          'Stuff',
          'Stuff',
        ]}
        renderCard={(card) => {
          return (
            <View style={styles.container}>
              <View style={styles.card}>
                <Text style={styles.text}>{card}</Text>
              </View>
            </View>
          );
        }}
        onSwiped={(cardIndex) => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          setCardDisplay(0);
        }}
        cardIndex={cardDisplay}
        backgroundColor={'blue'}
        verticalSwipe={false}
        goBackToPreviousCardOnSwipeRight={true}
        stackSeparation={0}
        stackScale={0}
        cardVerticalMargin={0}
        cardHorizontalMargin={0}
        stackSize={3}>
        {/* <Button
          onPress={() => {
            console.log('oulala');
          }}
          title="Press me">
          You can press me
        </Button> */}
      </Swiper>
    </View>
  );
};

export default CardStack;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: 100,
    // backgroundColor: 'blue',
    width: 300,
    height: 200,
    marginRight: 5,
  },
  card: {
    // display: 'flex',
    // position: 'absolute',
    // height: 200,
    height: '100%',
    // flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'red',
    // width: '100%',
    // height: '100%',
  },
  text: {
    textAlign: 'center',
    // fontSize: 50,
    backgroundColor: 'orange',
  },
});
