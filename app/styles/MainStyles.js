import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: 'yellow',
    fontSize: 36,
    alignSelf: 'center',
  },
  safeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 16,
    marginTop: 10,
  },
  largeButton: {
    backgroundColor: 'teal',
    borderRadius: 15,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
  },
  flexButtons: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 230,
  },
  columnButtons: {
    flex: 0.5,
    height: 300,
  },
  buttonText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
