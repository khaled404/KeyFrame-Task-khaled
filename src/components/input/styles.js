import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../constants/styleConstants';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.sacandAppBackgroundColor,
    borderRadius: 15,
    paddingVertical: 5.1,
    width: '100%',
    borderColor: Colors.sacandAppBackgroundColor,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  textInputContainer: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#707070',
  },
  iconLeft: {
    position: 'absolute',
    paddingLeft: 10,
    top: 18,
  },
  iconRight: {
    position: 'absolute',
    paddingRight: 10,
    top: 18,
    right: 10,
  },
});
