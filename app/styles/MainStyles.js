import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: 'yellow',
    fontSize: 24,
  },
  safeContainer: {
    backgroundColor: 'green',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 16,
    marginTop: 10,
  },
  largeButton: {
    backgroundColor: 'blue',
  },
  flexButtons: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
