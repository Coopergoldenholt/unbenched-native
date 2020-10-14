import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const DrillCategories = (props) => {
  const [selected, setSelected] = useState(false);
  return (
    <View>
      <Text>{props.label}</Text>
      <TouchableOpacity onPress={() => setSelected(!selected)}>
        <Icon
          name={selected ? 'chevron-down' : 'chevron-right'}
          size={30}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default DrillCategories;
