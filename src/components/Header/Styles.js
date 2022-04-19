import {StyleSheet} from 'react-native';
import {Colors} from '../../config/Colors';

export const headerStyles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    paddingTop: 36,
    paddingHorizontal: 36,
    paddingBottom: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text_color,
  },

  subTitle: {
    fontSize: 36,
    color: Colors.accent,
    fontWeight: '700',
  },

  line: {
    width: 90,
    height: 1,
    marginTop: 15,
    marginBottom: 5,
    backgroundColor: Colors.gray,
  },
});
