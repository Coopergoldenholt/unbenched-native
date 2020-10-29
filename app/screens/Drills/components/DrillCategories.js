import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import DrillDisplay from './DrillDisplay';

const DrillCategories = (props) => {
  const [selected, setSelected] = useState(false);

  const filterDrills = props.drills
    .filter((ele) => {
      return ele.type === props.type;
    })
    .map((ele) => {
      return (
        <DrillDisplay
          drill={ele}
          navigation={props.navigation}
          title={ele.name}
        />
      );
    });

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setSelected(!selected)}>
        <Text style={styles.text}>{props.label}</Text>

        <Icon
          name={selected ? 'chevron-down' : 'chevron-right'}
          size={30}
          color="black"
        />
      </TouchableOpacity>
      {/* <DrillCategories /> */}
      {selected ? filterDrills : null}
    </>
  );
};

export default DrillCategories;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 15,
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 20,
  },
});
