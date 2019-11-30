import React, {useEffect, useState, Component} from 'react';
import {Text, SafeAreaView} from 'react-native';
import styles from '../../app/styles/MainStyles';
import MainButtons from '../../app/components/Main/MainButtons';

export default function Main() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Text style={styles.header}>Welcome!</Text>
      <MainButtons />
    </SafeAreaView>
  );
}
