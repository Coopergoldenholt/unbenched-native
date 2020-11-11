import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';

const TypeModal = (props) => {
  const drillDisplay = props.drills.map((ele) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 10,
          marginRight: 20,
        }}
        onPress={() => props.handleDrillSelect(ele.value)}>
        <Text style={{fontSize: 25}}>{ele.label}</Text>
        {props.typeOfDrillsSelected.includes(ele.value) ? (
          <Icon name="check-circle" size={30} color="black" />
        ) : (
          <Icon name="circle" size={30} color="black" />
        )}
      </TouchableOpacity>
    );
  });
  return (
    <View>
      <Modal style={styles.modal} isVisible={props.display}>
        <View style={styles.scrollableModal}>
          <ScrollView scrollEventThrottle={16}>
            {drillDisplay}
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Button
                title="Close"
                buttonStyle={{
                  borderRadius: 3,
                  backgroundColor: '#7392B7',
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  width: 300,
                }}
                onPress={() => props.setPressedDrill(undefined)}
              />
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default TypeModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    height: '80%',
    backgroundColor: 'white',
  },
});
