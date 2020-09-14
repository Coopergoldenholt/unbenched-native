import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';

const EnterGameModule = (props) => {
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
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setFieldGoalsAttempted(text)}
                keyboardType="number-pad"
                placeholder="Field Goals Attempted"
              />
              <TextInput
                style={styles.input}
                onChangeText={(text) => setFieldGoalsMade(text)}
                keyboardType="number-pad"
                placeholder="Field Goals Made"
              />
              <TextInput
                style={styles.input}
                onChangeText={(text) => setThreePointAttempted(text)}
                keyboardType="number-pad"
                placeholder="Threes Attempted"
              />
              <TextInput
                style={styles.input}
                onChangeText={(text) => setThreePointMade(text)}
                keyboardType="number-pad"
                placeholder="Threes Made"
              />
              <TextInput
                style={styles.input}
                onChangeText={(text) => setFreeThrowAttempted(text)}
                keyboardType="number-pad"
                placeholder="Free-Throws Attempted"
              />
              <TextInput
                style={styles.input}
                onChangeText={(text) => setFreeThrowMade(text)}
                keyboardType="number-pad"
                placeholder="Free-Throw Made"
              />
              <TextInput
                style={styles.input}
                onChangeText={(text) => setOffensiveRebound(text)}
                keyboardType="number-pad"
                placeholder="Offensive Rebounds"
              />
              <TextInput
                style={styles.input}
                onChangeText={(text) => setDefensiveRebound(text)}
                keyboardType="number-pad"
                placeholder="Defensive Rebounds"
              />
              <TextInput
                style={styles.input}
                onChangeText={(text) => setAssists(text)}
                keyboardType="number-pad"
                placeholder="Assits"
              />
              <TextInput
                style={styles.input}
                onChangeText={(text) => setBlock(text)}
                keyboardType="number-pad"
                placeholder="Blocks"
              />
              <TextInput
                style={styles.input}
                onChangeText={(text) => setSteal(text)}
                keyboardType="number-pad"
                placeholder="Steals"
              />
              <TextInput
                style={styles.input}
                onChangeText={(text) => setTurnover(text)}
                keyboardType="number-pad"
                placeholder="Turnovers"
              />
              <TextInput
                style={styles.input}
                onChangeText={(text) => setFoul(text)}
                keyboardType="number-pad"
                placeholder="Personal Fouls"
              />
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

export default EnterGameModule;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    height: '80%',
    backgroundColor: 'white',
  },

  inputContainer: {
    alignItems: 'center',
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
