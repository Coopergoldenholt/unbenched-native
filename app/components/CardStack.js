import React, {useState} from 'react';
import Swiper from 'react-native-deck-swiper';
import {Button, StyleSheet, Text, View} from 'react-native';
import Card from './Card';

const CardStack = () => {
  const [cardDisplay, setCardDisplay] = useState(0);
  const [cards, setCards] = useState([]);

  // const displayCard =

  return (
    <View style={styles.container}>
      <Swiper
        cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES']}
        renderCard={(card, index) => {
          return (
            <View style={styles.container}>
              <View style={styles.card}>
                <Card card={card} />
              </View>
            </View>
          );
        }}
        onSwiped={(cardIndex) => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log('all Jumped');
        }}
        // cardIndex={cardDisplay}
        backgroundColor={'blue'}
        verticalSwipe={false}
        goBackToPreviousCardOnSwipeRight={true}
        stackSeparation={0}
        stackScale={0}
        cardVerticalMargin={0}
        cardHorizontalMargin={0}
        infinite={true}
        // jumpToCardIndex={2}
        // swipeBackCard={true}
        stackSize={2}>
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
    backgroundColor: 'transparent',
    // width: '100%',
    // height: '100%',
  },
  text: {
    textAlign: 'center',
    // fontSize: 50,
    backgroundColor: 'orange',
  },
});
