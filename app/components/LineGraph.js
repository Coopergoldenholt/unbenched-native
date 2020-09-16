import React from 'react';
import {View} from 'react-native';
import {LineChart, Grid, XAxis, YAxis} from 'react-native-svg-charts';

const LineGraph = (props) => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, 40];
  const yAxis = [0, 30];

  const axesSvg = {fontSize: 10, fill: 'grey'};
  const verticalContentInset = {top: 10, bottom: 10};
  const xAxisHeight = 30;
  console.log(props.data);
  return (
    <View style={{height: 300, padding: 5, flexDirection: 'row'}}>
      <YAxis
        data={props.data}
        style={{marginBottom: xAxisHeight}}
        contentInset={verticalContentInset}
        svg={axesSvg}
      />
      <View style={{flex: 1, marginLeft: 10, padding: 5}}>
        <LineChart
          style={{flex: 1}}
          data={props.data}
          contentInset={verticalContentInset}
          svg={{
            stroke: '#F9A03F',
            strokeWidth: 2,
          }}>
          <Grid />
        </LineChart>
        {/* <XAxis
            style={{marginHorizontal: -10, height: xAxisHeight}}
            data={data}
            formatLabel={(value, index) => index}
            contentInset={{left: 10, right: 10}}
            svg={axesSvg}
          /> */}
      </View>
    </View>
  );
};

export default LineGraph;
