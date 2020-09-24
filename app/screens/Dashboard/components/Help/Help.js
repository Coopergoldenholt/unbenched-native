import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import CardStack from '../../../../components/CardStack';
import {connect} from 'react-redux';
import {Thumbnail} from 'react-native-thumbnail-video';

const Help = (props) => {
  const {goals, averages} = props;

  const checkAst = () => {
    if (goals.astAvg > averages.astAvg) {
      return (
        <View style={styles.cardStackContainer}>
          <Text style={styles.textNoMarginBottom}>
            You are not reaching your assist goals.
          </Text>
          <Text style={styles.text}>Check out these drills to get better!</Text>
          <CardStack />
        </View>
      );
    } else null;
  };
  const checkBlock = () => {
    if (goals.blockAvg > averages.blockAvg) {
      return (
        <>
          <View style={styles.cardStackContainer}>
            <Text style={styles.textNoMarginBottom}>
              You are not reaching your block goals.
            </Text>
            <Text style={styles.text}>
              Check out these drills to get better!
            </Text>
            {/* <CardStack /> */}

            <Thumbnail url="https://www.youtube.com/watch?v=lgj3D5-jJ74" />
          </View>
        </>
      );
    } else null;
  };

  return (
    <View style={styles.container}>
      {checkAst()}
      {checkBlock()}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {averages: state.season.averages, goals: state.season.goals};
};

export default connect(mapStateToProps)(Help);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStackContainer: {
    height: 300,
    width: '100%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    paddingBottom: 10,
  },
  textNoMarginBottom: {
    fontSize: 20,
  },
});
