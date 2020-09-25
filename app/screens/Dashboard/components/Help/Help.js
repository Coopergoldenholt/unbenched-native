import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import CardStack from '../../../../components/CardStack';
import {connect} from 'react-redux';

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
            <CardStack />
          </View>
        </>
      );
    } else null;
  };
  const checkRebounds = () => {
    const goalRebound = goals.orbAvg + goals.drbAvg;
    const averageRebound = averages.orbAvg + averages.drbAvg;

    if (goalRebound > averageRebound) {
      return (
        <>
          <View style={styles.cardStackContainer}>
            <Text style={styles.textNoMarginBottom}>
              You are not reaching your rebound goals.
            </Text>
            <Text style={styles.text}>
              Check out these drills to get better!
            </Text>
            <CardStack />
          </View>
        </>
      );
    } else null;
  };
  const checkThreePerc = () => {
    const goalThreePerc =
      Math.round((goals.threeMAvg / goals.threeAAvg) * 10000) / 100;
    const averageThreePerc =
      Math.round((averages.threeMAvg / averages.threeAAvg) * 10000) / 100;

    if (goalThreePerc > averageThreePerc) {
      return (
        <>
          <View style={styles.cardStackContainer}>
            <Text style={styles.textNoMarginBottom}>
              You are not reaching your three point percentage goals.
            </Text>
            <Text style={styles.text}>
              Check out these drills to get better!
            </Text>
            <CardStack />
          </View>
        </>
      );
    } else null;
  };
  const checkFTPerc = () => {
    const goalFTPerc = Math.round((goals.ftmAvg / goals.ftaAvg) * 10000) / 100;
    const averageFTPerc =
      Math.round((averages.ftmAvg / averages.ftaAvg) * 10000) / 100;

    if (goalFTPerc > averageFTPerc) {
      return (
        <>
          <View style={styles.cardStackContainer}>
            <Text style={styles.textNoMarginBottom}>
              You are not reaching your free throw percentage goals.
            </Text>
            <Text style={styles.text}>
              Check out these drills to get better!
            </Text>
            <CardStack />
          </View>
        </>
      );
    } else null;
  };
  const checkFieldPerc = () => {
    const goalFieldPerc =
      Math.round((goals.fgAvg / goals.fgAAvg) * 10000) / 100;
    const averageFieldPerc =
      Math.round((averages.fgAvg / averages.fgAAvg) * 10000) / 100;

    if (goalFieldPerc > averageFieldPerc) {
      return (
        <>
          <View style={styles.cardStackContainer}>
            <Text style={styles.textNoMarginBottom}>
              You are not reaching your three point percentage goals.
            </Text>
            <Text style={styles.text}>
              Check out these drills to get better!
            </Text>
            <CardStack />
          </View>
        </>
      );
    } else null;
  };
  const checkTO = () => {
    if (goals.tovAvg > averages.tovAvg) {
      return (
        <>
          <View style={styles.cardStackContainer}>
            <Text style={styles.textNoMarginBottom}>
              You are not reaching your turover goals.
            </Text>
            <Text style={styles.text}>
              Check out these drills to get better!
            </Text>
            <CardStack />
          </View>
        </>
      );
    } else null;
  };
  const checkStl = () => {
    if (goals.stlAvg > averages.stlAvg) {
      return (
        <>
          <View style={styles.cardStackContainer}>
            <Text style={styles.textNoMarginBottom}>
              You are not reaching your steal goals.
            </Text>
            <Text style={styles.text}>
              Check out these drills to get better!
            </Text>
            <CardStack />
          </View>
        </>
      );
    } else null;
  };

  return (
    <View style={styles.container}>
      {checkFieldPerc()}
      {checkThreePerc()}
      {checkFTPerc()}
      {checkAst()}
      {checkRebounds()}
      {checkBlock()}
      {checkStl()}
      {checkTO()}
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
