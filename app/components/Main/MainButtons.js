import React, {useEffect, useState, Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '~/../../app/styles/MainStyles';
import Torch from 'react-native-torch';

let torchB = true;

export default function MainButtons() {
  return (
    <React.Fragment>
      <View style={styles.flexButtons}>
        <View style={styles.columnButtons}>
          <TouchableOpacity style={styles.largeButton} onPress={flashLight}>
            <Text style={styles.buttonText}>FLASHLIGHT</Text>
          </TouchableOpacity>
          {/*Hello*/}
          <TouchableOpacity style={styles.largeButton} onPress={emergencyCall}>
            <Text style={styles.buttonText}>EMERGENCY CALL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnButtons}>
          <TouchableOpacity style={styles.largeButton} onPress={route}>
            <Text style={styles.buttonText}>CREATE ROUTE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.largeButton} onPress={arrived}>
            <Text style={styles.buttonText}>ARRIVED</Text>
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
}

function flashLight() {
  if (torchB === true) {
    Torch.switchState(false);
    torchB = false;
  } else {
    Torch.switchState(true);
    torchB = true;
  }
}

function emergencyCall() {
  console.warn('Calling');
}

function route() {
  console.warn('Making a path');
}

function arrived() {
  console.warn('Arrived!');
}
