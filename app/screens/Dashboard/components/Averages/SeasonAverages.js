import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Table from '../../../../components/Table';
import {connect} from 'react-redux';

const SeasonAverages = (props) => {
  const {
    astAvg,
    ptsAvg,
    blockAvg,
    drbAvg,
    fgAvg,
    fgaAvg,
    ftaAvg,
    ftmAvg,
    orbAvg,
    pfAvg,
    stlAvg,
    tovAvg,
  } = props.averages;
  const shootingHeaderData = [
    'PTS',
    'FG',
    'FGA',
    'FG%',
    '3P%',
    'TS%',
    'EFG%',
    'FT',
    'FTA',
    'FT%',
  ];
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

  let fielGoalPerc = Math.round((fgAvg / fgaAvg) * 10000) / 100;

  let threePointPerc = Math.round((threeMAvg / threeAAvg) * 10000) / 100;

  const shootingRowData = [
    [ptsAvg, fgAvg, fgaAvg, , fielGoalPerc, threePointPerc, 0, 0, 0, 0, 0],
  ];
  const shootingGoalRowData = [[1, 1, 0, 0, 0, 0, 0, 0, 0]];
  const otherRowData = [[0, 0, 0, 0, 0, 0, 0, 0]];

  console.log(props.averages);
  return (
    <View style={styles.container}>
      {props.type === 'season' ? (
        <>
          <Text style={styles.text}>Season Averages:</Text>
          <Table rowData={shootingRowData} headerData={shootingHeaderData} />
          <Table rowData={otherRowData} headerData={otherHeaderData} />
        </>
      ) : (
        <>
          <Text style={styles.text}>Goals:</Text>
          <Table
            rowData={shootingGoalRowData}
            headerData={shootingHeaderData}
          />
          <Table rowData={otherRowData} headerData={otherHeaderData} />
        </>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  return state.season;
};

export default connect(mapStateToProps)(SeasonAverages);

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
