import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';

const DisplayWorkout = (props) => {
  const {workout} = props.route.params;

  const eachWorkout = workout.map((ele) => {
    return (
      <View style={styles.videoContainer}>
        <Text>{ele.name}</Text>
        <WebView
          style={{flex: 1}}
          javaScriptEnabled={true}
          source={{
            uri: 'https://www.youtube.com/embed/TXZED8duLxI',
          }}
          // style={{
          //   width: 200,
          //   height: 200,
          //   backgroundColor: 'blue',
          //   marginTop: 20,
          // }}
        />
      </View>
    );
  });

  return (
    <View style={{height: '100%', alignItems: 'center'}}>
      <ScrollView>
        {eachWorkout}
        {/* <Text>{name}</Text> */}
        {/* <View style={styles.videoContainer}>
        <WebView
          style={{flex: 1}}
          javaScriptEnabled={true}
          source={{
            uri: 'https://www.youtube.com/embed/TXZED8duLxI',
          }}
          // style={{
          //   width: 200,
          //   height: 200,
          //   backgroundColor: 'blue',
          //   marginTop: 20,
          // }}
        />
      </View> */}
      </ScrollView>
    </View>
  );
};

export default DisplayWorkout;

const styles = StyleSheet.create({
  videoContainer: {
    height: 300,
    width: 350,
  },
});
