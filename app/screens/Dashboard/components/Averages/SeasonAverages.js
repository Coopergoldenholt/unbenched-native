import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Table from '../../../../components/Table';

const SeasonAverages = (props) => {
  const shootingHeaderData = [
    'PTS',
    'FG',
    'FGA',
    'FG%',
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
  const shootingRowData = [[0, 0, 0, 0, 0, 0, 0, 0, 0]];
  const shootingGoalRowData = [[1, 1, 0, 0, 0, 0, 0, 0, 0]];
  const otherRowData = [[0, 0, 0, 0, 0, 0, 0, 0]];
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
