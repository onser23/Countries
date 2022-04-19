import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../../config/Colors';

export const searchInputStyles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'row',
    width: 300,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: Platform.OS === 'ios' ? 8 : 4,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  button: {
    flex: 1,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accent,
  },
});
