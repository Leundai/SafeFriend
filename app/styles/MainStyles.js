import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    fontSize: 24,
    alignSelf: 'center',
    position: 'relative',
  },
  safeContainer: {
    marginHorizontal: 16,
    marginTop: 10,
  },
  largeButton: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  flexButtons: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
