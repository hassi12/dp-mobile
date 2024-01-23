import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Star = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <View key={index}>
        {stars >= index + 1 ? (
          <MaterialIcons name="star" size={20} color="#FFD700" />
        ) : stars >= number ? (
          <MaterialIcons name="star-half" size={20} color="#FFD700" />
        ) : (
          <MaterialIcons name="star-outline" size={20} color="#FFD700" />
        )}
      </View>
    );
  });

  return (
    <View style={styles.iconStyle}>{ratingStar}</View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default Star;