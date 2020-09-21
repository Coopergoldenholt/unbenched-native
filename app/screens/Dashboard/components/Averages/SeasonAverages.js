import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Table from '../../../../components/Table';

const SeasonAverages = (props) => {
  const {
    astAvg,
    ptsAvg,
    blockAvg,
    drbAvg,
    threeMAvg,
    threeAAvg,
    fgAvg,
    fgaAvg,
    ftaAvg,
    ftmAvg,
    orbAvg,
    pfAvg,
    stlAvg,
    tovAvg,
  } = props.averages;
  const shootingHeaderData = ['PTS', 'FG', 'FGA', 'FT', 'FTA'];
  const percentageHeaderData = ['FG%', '3P%', 'FT%', 'EFG%', 'TS%'];
  const otherHeaderData = [
    'ORB',
    'DRB',
    'TRB',
    'AST',
    'STL',
    'BLK',
    'TOV',
    'PF',
  ];

  let fieldGoalPerc = Math.round((fgAvg / fgaAvg) * 10000) / 100;

  let threePointPerc = Math.round((threeMAvg / threeAAvg) * 10000) / 100;

  const shootingRowData = [[ptsAvg, fgAvg, fgaAvg, 0, 0]];
  const percentageData = [[fieldGoalPerc, threePointPerc, 0, 0, 0]];
  const shootingGoalRowData = [[1, 1, 0, 0, 0, 0, 0, 0, 0]];
  const otherRowData = [[0, 0, 0, 0, 0, 0, 0, 0, 0]];

  console.log(props.averages);
  return (
    <View style={styles.container}>
      {props.type === 'season' ? (
        <>
          <Text style={styles.text}>Season Averages:</Text>
        </>
      ) : (
        <>
          <Text style={styles.text}>Goals:</Text>
        </>
      )}
      <Table rowData={shootingRowData} headerData={shootingHeaderData} />
      <Table rowData={otherRowData} headerData={otherHeaderData} />
      <Table rowData={percentageData} headerData={percentageHeaderData} />
    </View>
  );
  s;
};

export default SeasonAverages;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',

    marginBottom: 20,
  },
  text: {
    paddingLeft: 5,
    fontSize: 20,
  },
});
