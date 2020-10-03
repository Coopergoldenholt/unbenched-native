import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

const CollectTime = (props) => {
  return (
    <Card containerStyle={styles.card}>
      <Card.Title>{props.time}</Card.Title>
      {/* <Card.Divider /> */}
      {/* <Card.Image source={require('../images/pic2.jpg')} /> */}
      <View style={styles.iconContainer}>
        <Icon name="clock" size={60} />
      </View>

      {/* <Button
        // icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="VIEW NOW"
      /> */}
    </Card>
  );
};

export default CollectTime;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: '30%',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
