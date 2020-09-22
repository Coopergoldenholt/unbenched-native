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

  const twoPointsMade = fgAvg - threeMAvg;

  let fieldGoalPerc = Math.round((fgAvg / fgaAvg) * 10000) / 100;

  let threePointPerc = Math.round((threeMAvg / threeAAvg) * 10000) / 100;

  let freeThrowPerc = Math.round((ftmAvg / ftaAvg) * 10000) / 100;

  let totalRb = orbAvg + drbAvg;

  //Effective Field Goal Formula
  const shotCalcualtion = twoPointsMade + 1.5 * threeMAvg;
  const efgPercent = shotCalcualtion / fgaAvg;
  let effectFGPerc = Math.round(efgPercent * 10000) / 100;

  //True Shooting Formula
  const firstAlgorithm = fgaAvg + 0.44 * ftaAvg;
  const double = 2 * firstAlgorithm;
  const perc = ptsAvg / double;
  const tsPerc = Math.round(perc * 10000) / 100;

  const shootingRowData = [[ptsAvg, fgAvg, fgaAvg, ftmAvg, ftaAvg]];
  const percentageData = [
    [fieldGoalPerc, threePointPerc, freeThrowPerc, effectFGPerc, tsPerc],
  ];
  const otherRowData = [
    [orbAvg, drbAvg, totalRb, astAvg, stlAvg, blockAvg, tovAvg, pfAvg],
  ];

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
