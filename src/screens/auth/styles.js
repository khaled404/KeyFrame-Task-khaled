import {StyleSheet} from 'react-native';
import {Colors, Fonts, PixelPerfect} from '../../constants/styleConstants';

export default StyleSheet.create({
  switchContainer: {
    alignSelf: 'center',
    marginTop: PixelPerfect(60),
  },
  switchText: {
    fontFamily: Fonts.bold,
    color: Colors.dark,
  },
});
