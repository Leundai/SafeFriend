/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, Component} from 'react';
import {Text, SafeAreaView, Image, View} from 'react-native';
import styles from '../../app/styles/MainStyles';
import MainButtons from '../../app/components/Main/MainButtons';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default function Main() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Text style={styles.header}> SafeFriend </Text>
      <View style={{borderWidth: 4, borderColor: '#6200EE'}}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 40.113983,
            longitude: -88.224412,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
      />
    </View>
	   <MainButtons />
    </SafeAreaView>
  );
}
