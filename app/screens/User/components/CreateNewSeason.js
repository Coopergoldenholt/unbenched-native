import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
// import {CheckBox} from 'react-native-elements';

import Modal from 'react-native-modal';

const CreateNewSeason = (props) => {
  const [seasonName, setSeasonName] = useState('');
  const [defaultSeason, setDefaultSeason] = useState(true);

  return (
    <View>
      <Modal style={styles.modal} isVisible={props.display}>
        <View style={styles.scrollableModal}>
          <ScrollView scrollEventThrottle={16}>
            <TextInput
              style={styles.input}
              placeholder="Season Name"
              onChangeText={(text) => setSeasonName(text)}
            />
            <View style={styles.checkBoxContainer}>
              <Text style={styles.checkboxText}>Set season as Default?</Text>

              <CheckBox
                style={styles.checkbox}
                disabled={false}
                value={defaultSeason}
                onValueChange={(newValue) => setDefaultSeason(newValue)}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => props.displayModal()}
                style={styles.buttonCancel}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonConfirm}>
                <Text>Confirm</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default CreateNewSeason;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  checkbox: {
    alignSelf: 'center',
    height: 20,
    width: 20,
  },
  checkboxText: {
    marginRight: 10,
  },
  scrollableModal: {
    height: '30%',
    backgroundColor: 'white',
  },

  inputContainer: {
    alignItems: 'center',
  },
  checkBoxContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 15,
  },
  //Buttons
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonCancel: {
    paddingTop: 3,
    marginLeft: 10,
    backgroundColor: '#dea5a4',
    borderRadius: 5,
    alignItems: 'center',
    padding: 3,
    height: 30,
    justifyContent: 'center',
    width: 100,
  },
  buttonConfirm: {
    paddingTop: 3,
    marginLeft: 10,
    backgroundColor: '#7392B7',
    borderRadius: 5,
    alignItems: 'center',
    padding: 3,
    height: 30,
    justifyContent: 'center',
    width: 100,
  },
});
