import {StyleSheet} from 'react-native';
import {Colors, Fonts, PixelPerfect} from '../../constants/styleConstants';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: Colors.sacandAppBackgroundColor,
    marginBottom: 10,
  },
  title: {
    fontFamily: Fonts.regular,
    fontSize: PixelPerfect(30),
    color: Colors.dark,
    paddingVertical: PixelPerfect(15),
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
});
