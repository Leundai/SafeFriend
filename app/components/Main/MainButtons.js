import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '~/../../app/styles/MainStyles';

export default function MainButtons() {
  return (
    <React.Fragment>
      <View style={styles.flexButtons}>
        <View style={styles.columnButtons}>
          <TouchableOpacity style={styles.largeButton} onPress={flashLight()}>
            <Text style={styles.buttonText}>Flashlight</Text>
          </TouchableOpacity>
          {/*Hello*/}
          <TouchableOpacity
            style={styles.largeButton}
            onPress={emergencyCall()}>
            <Text style={styles.buttonText}>Emergency Call</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnButtons}>
          <TouchableOpacity style={styles.largeButton} onPress={route()}>
            <Text style={styles.buttonText}>Create Route</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.largeButton} onPress={arrived()}>
            <Text style={styles.buttonText}>Arrived</Text>
          </TouchableOpacity>
        </View>
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
