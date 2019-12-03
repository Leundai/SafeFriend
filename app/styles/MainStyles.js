import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    fontSize: 36,
    alignSelf: 'center',
    flex: 0.3,
  },
  safeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 16,
    marginTop: 0,
  },
  largeButton: {
    backgroundColor: '#6200EE',
    flex: 0.5,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2,
  },
  flexButtons: {
    flexGrow: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnButtons: {
    flex: 1,
    height: 200,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
