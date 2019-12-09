import React, {useEffect, useState, Component} from 'react';
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
} from 'react-native';
import styles from '~/../../app/styles/MainStyles';
import Torch from 'react-native-torch';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

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
          <TouchableOpacity style={styles.largeButton} onPress={emergencyCall}>
            <Text style={styles.buttonText}>SAFERIDES</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnButtons}>
          <TouchableOpacity style={styles.largeButton} onPress={share}>
            <Text style={styles.buttonText}>SHARE LOCATION</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.largeButton} onPress={arrived}>
            <Text style={styles.buttonText}>ARRIVED</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.largeButton} onPress={emergencyCall}>
            <Text style={styles.buttonText}>SAFEWALKS</Text>
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

async function emergencyCall() {
  var accept = false;
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CALL_PHONE,
      {
        title:
          'Safe Friend App needs phone call permissions' +
          'so you can contact emergency lines quickly through app',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      accept = await AsyncAlert();
      if (accept === true) {
        RNImmediatePhoneCall.immediatePhoneCall('8478268553');
      }
    } else {
      console.log('Phone Call permissions denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

const AsyncAlert = () =>
  new Promise(resolve => {
    Alert.alert(
      'Call 911',
      'Are you sure you want to call?',
      [
        {
          text: 'CANCEL',
          onPress: () => resolve(false),
        },
        {
          text: 'YES',
          onPress: () => resolve(true),
        },
      ],
      {cancelable: false},
    );
  });

function share() {
  console.warn('Sharing Path');
}

function arrived() {
  console.warn('Arrived!');
}
