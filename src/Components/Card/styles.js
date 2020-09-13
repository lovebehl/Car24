import {StyleSheet} from 'react-native';

import {Colors} from '../../config';

const styles = StyleSheet.create({
  content: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.GENERIC_TEXT,
  },
  heading: {
    color: Colors.HEADER_COLOR_TEXT,
    fontSize: 17,
    fontWeight: '400',
  },
  gridCard: {
    flex: 0.5,
    marginTop: 10,
    padding: 5,
    backgroundColor: Colors.SCREEN_BACKGROUND_COLOR,
    borderRadius: 2,
    shadowColor: Colors.GENERIC_TEXT,
    shadowOpacity: 0.4,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3,
    },
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    padding: 5,
    backgroundColor: Colors.SCREEN_BACKGROUND_COLOR,
    borderRadius: 2,
    shadowColor: Colors.GENERIC_TEXT,
    shadowOpacity: 0.4,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3,
    },
  },
  gridImageStyle: {
    height: 150,
    width: 150,
  },
  ImageStyle: {
    height: 80,
    width: 80,
  },
  descBox: {
    paddingHorizontal: 15,
    flex: 1,
  },
});

export default styles;
