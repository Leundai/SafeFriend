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
import SendSMS from 'react-native-sms';

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
          <TouchableOpacity
            style={styles.largeButton}
            onPress={() => immediateCall('911', '6467254427')}>
            <Text style={styles.buttonText}>EMERGENCY CALL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.largeButton}
            onPress={() => immediateCall('SafeWalks', '2173331216')}>
            <Text style={styles.buttonText}>SAFE WALKS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.columnButtons}>
          <TouchableOpacity style={styles.largeButton} onPress={share}>
            <Text style={styles.buttonText}>SHARE LOCATION</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.largeButton} onPress={arrived}>
            <Text style={styles.buttonText}>ARRIVED</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.largeButton}
            onPress={() => immediateCall('SafeRides', '2172657433')}>
            <Text style={styles.buttonText}>SAFE RIDES</Text>
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

async function immediateCall(text, number) {
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
      accept = await AsyncAlert(text);
      if (accept === true) {
        RNImmediatePhoneCall.immediatePhoneCall(number);
      }
    } else {
      console.log('Phone Call permissions denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

const AsyncAlert = text =>
  new Promise(resolve => {
    Alert.alert(
      'Call immediately?',
      'Are you sure you want to call ' + text + ' ?',
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
  SendSMS.send(
    {
      body: 'Arrived!',
      recipients: ['8478268553'],
      successTypes: ['sent', 'queued'],
      allowAndroidSendWithoutReadPermission: true,
    },
    (completed, cancelled, error) => {
      console.log(
        'SMS Callback: completed: ' +
          completed +
          ' cancelled: ' +
          cancelled +
          'error: ' +
          error,
      );
    },
  );
}
