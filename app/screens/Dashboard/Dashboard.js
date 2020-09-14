import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import SeasonAverages from './components/Averages/SeasonAverages';
import EnterGameModule from './components/Game/EnterGameModule';
import NewGameModal from './components/Game/NewGameModal';
import Trends from './components/Trends/Trends';

const Dashboard = () => {
  const [displayAddGame, setDisplayAddGame] = useState(false);
  const [displayNewGame, setDisplayNewGame] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <EnterGameModule
        displayGame={setDisplayAddGame}
        display={displayAddGame}
      />
      <NewGameModal displayGame={setDisplayNewGame} display={displayNewGame} />
      <ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setDisplayAddGame(true)}>
          <Text>Add Game</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setDisplayNewGame(true)}>
          <Text>Start Game</Text>
        </TouchableOpacity>
        <View style={styles.card}>
          <SeasonAverages type="season" />
          <SeasonAverages type="goals" />
        </View>
        <View style={styles.card}>
          <Trends />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    minHeight: 150,
    width: '100%',
    marginBottom: 15,
    padding: 8,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    shadowOpacity: 0.45,
    shadowRadius: 4.65,
    shadowColor: '#A9A9A9',
    shadowOffset: {width: 0, height: 3},

    //Android
    elevation: 6,
  },
  button: {
    marginTop: 10,
    paddingTop: 10,
    backgroundColor: '#F9A03F',
    borderRadius: 5,
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
  },
});
