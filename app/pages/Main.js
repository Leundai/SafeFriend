import React, {useEffect, useState, Component} from 'react';
import {Text, SafeAreaView, Image, View} from 'react-native';
import styles from '../../app/styles/MainStyles';
import MainButtons from '../../app/components/Main/MainButtons';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function Main() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Text style={styles.header}> SafeFriend </Text>
			<View></View>
      <MapView
	  	style={styles.map}
	    initialRegion={{
	      latitude: 37.78825,
	      longitude: -122.4324,
	      latitudeDelta: 0.0922,
	      longitudeDelta: 0.0421,
	    }}
	  />
	  <MainButtons />
    </SafeAreaView>
  );
}
