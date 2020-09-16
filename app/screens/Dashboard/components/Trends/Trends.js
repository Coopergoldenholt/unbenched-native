import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import LineGraph from '../../../../components/LineGraph';

const Trends = (props) => {
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
        setData('pts');
        break;
      case 'rebounds':
        setFalse();
        setReboundsClicked(true);
        setData('rebounds');
        break;
      case 'assists':
        setFalse();
        setAssitsClicked(true);
        setData('assists');
        break;
      case 'fgPer':
        setFalse();
        setFgPerClicked(true);
        setData('fgPer');
        break;
      case 'efgPer':
        setFalse();
        setEfgPerClicked(true);
        setData('efgPer');
        break;
      case 'tsPer':
        setFalse();
        setTsPerClicked(true);
        setData('tsPer');
        break;
      case 'to':
        setFalse();
        setToClicked(true);
        setData('to');
        break;
    }
  };

  const graphData = props.games.games.map((ele) => {
    const twoPointsMade = ele.field_goals_made - ele.three_made;
    const points = twoPointsMade * 2 + ele.three_made * 3 + ele.free_throw_made;
    switch (data) {
      case 'pts':
        return points;

      case 'rebounds':
        const rebounds = ele.offensive_rebound + ele.defensive_rebound;

        return rebounds;

      case 'assists':
        return ele.assist;

      case 'fgPer':
        const percentage =
          (ele.field_goals_made / ele.field_goals_attempted) * 100;
        return percentage;

      case 'efgPer':
        const shotCalcualtion = twoPointsMade + 1.5 * ele.three_made;
        const percent = shotCalcualtion / ele.field_goals_attempted;

        return percent * 100;
      case 'tsPer':
        const firstAlgorithm =
          ele.field_goals_attempted + 0.44 * ele.free_throw_shot;
        const double = 2 * firstAlgorithm;
        const perc = points / double;
        const total = Math.round(perc * 10000) / 100;
        return total;
      case 'to':
        return ele.turnover;
    }
  });

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
      <LineGraph data={graphData} />
    </View>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Trends);

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
