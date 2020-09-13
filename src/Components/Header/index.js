import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Header = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>{text ? text : 'Header'}</Text>
      </View>
    </View>
  );
};

export default Header;
