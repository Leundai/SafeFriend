import React, {useEffect, useState, Component} from 'react';
import {Text, SafeAreaView, Image} from 'react-native';
import styles from '../../app/styles/MainStyles';
import MainButtons from '../../app/components/Main/MainButtons';

export default function Main() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Text style={styles.header}>SafeFriend</Text>
      <Image source={require('../assets/gmaps.jpg')} />
      <MainButtons />
    </SafeAreaView>
  );
}
