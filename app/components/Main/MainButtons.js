import React from 'react';
import {Component, Button, View} from 'react-native';
import styles from '~/../../app/styles/MainStyles';

export default function MainButtons() {
  return (
    <React.Fragment>
      <View style={styles.flexButtons}>
        <Button
          style={styles.largeButton}
          onPress={flashLight()}
          title="Flashlight"
        />
        <Button
          style={styles.largeButton}
          onPress={emergencyCall()}
          title="Emergency Call"
        />
      </View>
      <View style={styles.flexButtons}>
        <Button
          style={styles.largeButton}
          onPress={route()}
          title="Create Route"
        />
        <Button
          style={styles.largeButton}
          onPress={arrived()}
          title="Arrived"
        />
      </View>
    </React.Fragment>
  );
}

function flashLight() {}

function emergencyCall() {}

function route() {}

function arrived() {}
