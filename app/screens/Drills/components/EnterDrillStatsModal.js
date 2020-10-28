import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import {Button, Input, Icon} from 'react-native-elements';

const DrillStatModal = (props) => {
  return (
    <View>
      <Modal style={styles.modal} isVisible={props.display}>
        <View style={styles.container}>
          <Input
            onChangeText={(text) => props.setLowValue(text)}
            placeholder="Shots Made"
            keyboardType="numeric"
            containerStyle={{marginTop: 20}}
          />
          <Input
            onChangeText={(text) => props.setHighValue(text)}
            placeholder="Shots Attempted"
            keyboardType="numeric"
          />

          <View style={styles.buttonContainer}>
            <Button
              onPress={() => props.setModalVisibility(false)}
              buttonStyle={{
                backgroundColor: 'firebrick',
                borderRadius: 3,
                marginTop: 15,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                width: 150,
              }}
              titleStyle={{color: 'black'}}
              title="Cancel"
            />
            <Button
              onPress={() => props.completedDrill()}
              buttonStyle={{
                backgroundColor: '#7392B7',
                borderRadius: 3,
                marginTop: 15,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                width: 150,
              }}
              titleStyle={{color: 'black'}}
              title="Enter"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DrillStatModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    height: '40%',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});