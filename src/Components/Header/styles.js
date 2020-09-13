import {Colors, FontSize} from '../../config';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: Colors.HEADER_COLOR,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: FontSize.HEADDER,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default styles;
