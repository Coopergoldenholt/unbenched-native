import React, {Component} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

const Tables = (props) => {
  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#7392B7'}}>
        <Row
          data={props.headerData}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows data={props.rowData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

export default Tables;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 0, paddingTop: 10, width: '100%'},
  head: {height: 35, backgroundColor: '#7392B7', width: '100%'},
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    marginTop: 10,
    marginLeft: 5,
  },
});
