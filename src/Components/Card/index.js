import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

export default ({data, isGrid, onPress}) => {
  return (
    <TouchableOpacity
      style={isGrid ? styles.gridCard : styles.card}
      activeOpacity={0.7}
      onPress={() => onPress(data)}>
      <Image
        style={isGrid ? styles.gridImageStyle : styles.ImageStyle}
        source={{uri: data.thumbnailUrl}}
      />
      <View style={styles.descBox}>
        <Text style={styles.heading}>Title</Text>
        <Text style={styles.content}>{data.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
