import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LineGraph from '../../../../components/LineGraph';

const Trends = () => {
  const [ptsClicked, setPTSClicked] = useState(true);
  const [reboundsClicked, setReboundsClicked] = useState(false);
  const [assistsClicked, setAssitsClicked] = useState(false);
  const [tsPerClicked, setTsPerClicked] = useState(false);
  const [efgPerClicked, setEfgPerClicked] = useState(false);
  const [fgPerClicked, setFgPerClicked] = useState(false);
  const [toClicked, setToClicked] = useState(false);
  const [data, setData] = useState('pts');

  const setFalse = () => {
    setPTSClicked(false);
    setReboundsClicked(false);
    setAssitsClicked(false);
    setToClicked(false);
    setTsPerClicked(false);
    setEfgPerClicked(false);
    setFgPerClicked(false);
    setToClicked(false);
  };

  const handleClick = async (type) => {
    switch (type) {
      case 'pts':
        setFalse();
        setPTSClicked(true);
        break;
      case 'rebounds':
        setFalse();
        setReboundsClicked(true);
        break;
      case 'assists':
        setFalse();
        setAssitsClicked(true);
        break;
      case 'fgPer':
        setFalse();
        setFgPerClicked(true);
        break;
      case 'efgPer':
        setFalse();
        setEfgPerClicked(true);
        break;
      case 'tsPer':
        setFalse();
        setTsPerClicked(true);
        break;
      case 'to':
        setFalse();
        setToClicked(true);
        break;
    }
  };

  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleClick('pts')}
          style={ptsClicked ? styles.clickedButton : styles.unClikedButton}>
          <Text>Points</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleClick('assists')}
          style={assistsClicked ? styles.clickedButton : styles.unClikedButton}>
          <Text>Assists</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleClick('rebounds')}
          style={
            reboundsClicked ? styles.clickedButton : styles.unClikedButton
          }>
          <Text>Rebounds</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleClick('fgPer')}
          style={fgPerClicked ? styles.clickedButton : styles.unClikedButton}>
          <Text>FG%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleClick('efgPer')}
          style={efgPerClicked ? styles.clickedButton : styles.unClikedButton}>
          <Text>EFG%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleClick('tsPer')}
          style={tsPerClicked ? styles.clickedButton : styles.unClikedButton}>
          <Text>TS%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleClick('to')}
          style={toClicked ? styles.clickedButton : styles.unClikedButton}>
          <Text>Turnovers</Text>
        </TouchableOpacity>
      </View>
      <LineGraph />
    </View>
  );
};

export default Trends;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  clickedButton: {
    borderColor: '#F9A03F',
    borderWidth: 1,
    backgroundColor: '#F9A03F',
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 5,
  },
  unClikedButton: {
    borderColor: '#F9A03F',
    borderWidth: 1,
    backgroundColor: 'white',
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 5,
  },
});
