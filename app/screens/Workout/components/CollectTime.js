import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

const CollectTime = () => {
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Title>15 Minutes</Card.Title>
        {/* <Card.Divider /> */}
        {/* <Card.Image source={require('../images/pic2.jpg')} /> */}
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          // icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card>
      <Card containerStyle={styles.card}>
        <Card.Title>30 Minutes</Card.Title>
        {/* <Card.Divider /> */}
        {/* <Card.Image source={require('../images/pic2.jpg')} /> */}
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          // icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card>
      <Card containerStyle={styles.card}>
        <Card.Title>45 Minutes</Card.Title>
        {/* <Card.Divider /> */}
        {/* <Card.Image source={require('../images/pic2.jpg')} /> */}
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          // icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Select"
        />
      </Card>
      <Card containerStyle={styles.card}>
        <Card.Title>1 Hour</Card.Title>
        {/* <Card.Divider /> */}
        {/* <Card.Image source={require('../images/pic2.jpg')} /> */}
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          // icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card>
      <Card containerStyle={styles.card}>
        <Card.Title>1:15 Hour</Card.Title>
        {/* <Card.Divider /> */}
        {/* <Card.Image source={require('../images/pic2.jpg')} /> */}
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          // icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card>
      <Card containerStyle={styles.card}>
        <Card.Title>1:30 Hour</Card.Title>
        {/* <Card.Divider /> */}
        {/* <Card.Image source={require('../images/pic2.jpg')} /> */}
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          // icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card>
      <Card containerStyle={styles.card}>
        <Card.Title>1:45 Hour</Card.Title>
        {/* <Card.Divider /> */}
        {/* <Card.Image source={require('../images/pic2.jpg')} /> */}
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          // icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card>
      <Card containerStyle={styles.card}>
        <Card.Title>2 Hours</Card.Title>
        {/* <Card.Divider /> */}
        {/* <Card.Image source={require('../images/pic2.jpg')} /> */}
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          // icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card>
    </View>
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
    width: '20%',
  },
});
