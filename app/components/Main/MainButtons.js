import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '~/../../app/styles/MainStyles';

export default function MainButtons() {
  return (
    <React.Fragment>
      <View style={styles.flexButtons}>
        <TouchableOpacity style={styles.largeButton} onPress={flashLight()}>
          <Text>Flashlight</Text>
        </TouchableOpacity>
        {/*Hello*/ }
        <TouchableOpacity style={styles.largeButton} onPress={emergencyCall()}>
          <Text>Emergency Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.largeButton} onPress={route()}>
          <Text>Create Route</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.largeButton} onPress={arrived()}>
          <Text>Arrived</Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
}

function flashLight() {
  console.log('Light On');
}

function emergencyCall() {
  console.log('Calling');
}

function route() {
  console.log('Making a path');
}

function arrived() {
  console.log('Arrived!');
}
