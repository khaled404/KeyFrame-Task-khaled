import {StyleSheet} from 'react-native';
import {Colors, Fonts, PixelPerfect} from '../../constants/styleConstants';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 20,
    marginBottom: 20,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: PixelPerfect(35),
    color: Colors.dark,
  },
  textInput: {
    marginTop: PixelPerfect(30),
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
});
