import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    fontSize: 36,
    alignSelf: 'center',
    flex: 0.3,
    marginBottom: 35,
    color: '#6200EE',
  },
  map: {
    borderWidth: 190,
    alignSelf: 'center',
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
    borderWidth: 2,
    borderColor: 'white',
  },
  flexButtons: {
    flexGrow: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnButtons: {
    flex: 1,
    height: 300,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
