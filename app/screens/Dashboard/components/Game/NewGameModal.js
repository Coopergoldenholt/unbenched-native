import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';

const NewGameModal = (props) => {
  const [fieldGoalsAttempted, setFieldGoalsAttempted] = useState(0);
  const [fieldGoalsMade, setFieldGoalsMade] = useState(0);
  const [threePointAttempted, setThreePointAttempted] = useState(0);
  const [threePointMade, setThreePointMade] = useState(0);
  const [freeThrowAttempted, setFreeThrowAttempted] = useState(0);
  const [freeThrowMade, setFreeThrowMade] = useState(0);
  const [offensiveRebound, setOffensiveRebound] = useState(0);
  const [defensiveRebound, setDefensiveRebound] = useState(0);
  const [assists, setAssists] = useState(0);
  const [block, setBlock] = useState(0);
  const [steal, setSteal] = useState(0);
  const [turnover, setTurnover] = useState(0);
  const [foul, setFoul] = useState(0);
  const [opponent, setOpponent] = useState(null);
  const [opponentText, setOpponentText] = useState('');

  const handleOpponentConfirm = () => {
    setOpponent(opponentText);
  };
  const handleOpponentEdit = () => {
    setOpponent(null);
  };
  const handleCancel = () => {
    setFieldGoalsAttempted(0);
    setFieldGoalsMade(0);
    setThreePointAttempted(0);
    setThreePointMade(0);
    setFreeThrowAttempted(0);
    setFreeThrowMade(0);
    setOffensiveRebound(0);
    setDefensiveRebound(0);
    setAssists(0);
    setBlock(0);
    setSteal(0);
    setTurnover(0);
    setFoul(0);
    setOpponent(null);
    setOpponentText('');
    props.displayGame(false);
  };

  const handleThreePointAttempt = (integer) => {
    setFieldGoalsAttempted(fieldGoalsAttempted + integer);
    setThreePointAttempted(threePointAttempted + integer);
  };
  const handleThreePointMade = (integer) => {
    setFieldGoalsMade(fieldGoalsMade + integer);
    setThreePointMade(threePointMade + integer);
  };
  return (
    <View>
      <Modal style={styles.modal} isVisible={props.display}>
        <View style={styles.scrollableModal}>
          <ScrollView scrollEventThrottle={16}>
            <View style={styles.opponentContainer}>
              {opponent ? (
                <>
                  <Text style={styles.opponentText}>v.s. {opponent}</Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleOpponentEdit()}>
                    <Text>Edit</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Opponent"
                    onChangeText={(text) => setOpponentText(text)}
                    value={opponentText}
                  />
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleOpponentConfirm()}>
                    <Text>Confirm</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
            <View>
              <View style={styles.category}>
                <Text>Field Goals Attempted</Text>
                <View style={styles.shotCounterContainer}>
                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() =>
                      setFieldGoalsAttempted(fieldGoalsAttempted - 1)
                    }>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/minus-icon.png')}
                    />
                  </TouchableOpacity>

                  <Text>{fieldGoalsAttempted}</Text>

                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() =>
                      setFieldGoalsAttempted(fieldGoalsAttempted + 1)
                    }>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/plus-icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.category}>
                <Text>Field Goals Made</Text>
                <View style={styles.shotCounterContainer}>
                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setFieldGoalsMade(fieldGoalsMade - 1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/minus-icon.png')}
                    />
                  </TouchableOpacity>

                  <Text>{fieldGoalsMade}</Text>

                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setFieldGoalsMade(fieldGoalsMade + 1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/plus-icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.category}>
                <Text>Three Attempted</Text>
                <View style={styles.shotCounterContainer}>
                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => handleThreePointAttempt(-1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/minus-icon.png')}
                    />
                  </TouchableOpacity>

                  <Text>{threePointAttempted}</Text>

                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => handleThreePointAttempt(1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/plus-icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.category}>
                <Text>Three Made</Text>
                <View style={styles.shotCounterContainer}>
                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => handleThreePointMade(-1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/minus-icon.png')}
                    />
                  </TouchableOpacity>

                  <Text>{threePointMade}</Text>

                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => handleThreePointMade(1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/plus-icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.category}>
                <Text>Free Throw Attempted</Text>
                <View style={styles.shotCounterContainer}>
                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() =>
                      setFreeThrowAttempted(freeThrowAttempted - 1)
                    }>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/minus-icon.png')}
                    />
                  </TouchableOpacity>

                  <Text>{freeThrowAttempted}</Text>

                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() =>
                      setFreeThrowAttempted(freeThrowAttempted + 1)
                    }>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/plus-icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.category}>
                <Text>Free Throw Made</Text>
                <View style={styles.shotCounterContainer}>
                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setFreeThrowMade(freeThrowMade - 1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/minus-icon.png')}
                    />
                  </TouchableOpacity>

                  <Text>{freeThrowMade}</Text>

                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setFreeThrowMade(freeThrowMade + 1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/plus-icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.category}>
                <Text>Offensive Rebounds</Text>
                <View style={styles.shotCounterContainer}>
                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setOffensiveRebound(offensiveRebound - 1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/minus-icon.png')}
                    />
                  </TouchableOpacity>

                  <Text>{offensiveRebound}</Text>

                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setOffensiveRebound(offensiveRebound + 1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/plus-icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.category}>
                <Text>Defensive Rebounds</Text>
                <View style={styles.shotCounterContainer}>
                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setDefensiveRebound(defensiveRebound - 1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/minus-icon.png')}
                    />
                  </TouchableOpacity>

                  <Text>{defensiveRebound}</Text>

                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setDefensiveRebound(defensiveRebound + 1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/plus-icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.category}>
                <Text>Assists</Text>
                <View style={styles.shotCounterContainer}>
                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setAssists(assists - 1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/minus-icon.png')}
                    />
                  </TouchableOpacity>

                  <Text>{assists}</Text>

                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setAssists(assists + 1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/plus-icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.category}>
                <Text>Blocks</Text>
                <View style={styles.shotCounterContainer}>
                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setBlock(block - 1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/minus-icon.png')}
                    />
                  </TouchableOpacity>

                  <Text>{block}</Text>

                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setBlock(block + 1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/plus-icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.category}>
                <Text>Steals</Text>
                <View style={styles.shotCounterContainer}>
                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setSteal(steal - 1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/minus-icon.png')}
                    />
                  </TouchableOpacity>

                  <Text>{steal}</Text>

                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setSteal(steal + 1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/plus-icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.category}>
                <Text>Turnovers</Text>
                <View style={styles.shotCounterContainer}>
                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setTurnover(turnover - 1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/minus-icon.png')}
                    />
                  </TouchableOpacity>

                  <Text>{turnover}</Text>

                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setTurnover(turnover + 1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/plus-icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.category}>
                <Text>Fouls</Text>
                <View style={styles.shotCounterContainer}>
                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setFoul(foul - 1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/minus-icon.png')}
                    />
                  </TouchableOpacity>

                  <Text>{foul}</Text>

                  <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setFoul(foul + 1)}>
                    <Image
                      style={styles.icon}
                      source={require('../../../../../assets/plus-icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => handleCancel()}
                style={styles.buttonCancel}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonConfirm}>
                <Text>Confirm</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default NewGameModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    height: '80%',
    backgroundColor: 'white',
  },
  scrollableModalContent1: {
    height: 200,
    backgroundColor: '#87BBE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText1: {
    fontSize: 20,
    color: 'white',
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText2: {
    fontSize: 20,
    color: 'white',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  //Buttons
  button: {
    paddingTop: 3,
    marginLeft: 10,
    backgroundColor: '#F9A03F',
    borderRadius: 5,
    alignItems: 'center',
    padding: 3,
    height: 30,
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 50,
  },
  buttonCancel: {
    paddingTop: 3,
    marginLeft: 10,
    backgroundColor: '#dea5a4',
    borderRadius: 5,
    alignItems: 'center',
    padding: 3,
    height: 30,
    justifyContent: 'center',
    width: 100,
  },
  buttonConfirm: {
    paddingTop: 3,
    marginLeft: 10,
    backgroundColor: '#7392B7',
    borderRadius: 5,
    alignItems: 'center',
    padding: 3,
    height: 30,
    justifyContent: 'center',
    width: 100,
  },
  iconButton: {
    marginTop: 10,
    paddingTop: 10,

    borderRadius: 5,
    alignItems: 'center',
    padding: 3,
    marginBottom: 10,
  },
  icon: {
    height: 30,
    width: 30,
  },
  category: {
    alignItems: 'center',
    width: '100%',
  },
  shotCounterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  opponentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  opponentText: {
    fontSize: 50,
  },
});
