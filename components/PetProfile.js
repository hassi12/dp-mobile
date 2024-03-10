import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function PetProfile({category}) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{uri: category?.image_url}}
          style={[styles.image, styles.firstImage]}
        />
        <Text style={styles.dogtext}>{category.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(1),
  },
  image: {
    width: wp(16),
    height: wp(16),
    borderRadius: wp(8), // Half of the width and height for circular image
    marginRight: wp(6),
    borderWidth: wp(0.5),
    borderColor: 'rgba(0, 0, 0, 0.1)', // border color with transparency
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: wp(2),
    elevation: wp(2),
  },
  firstImage: {
    marginLeft: wp(1),
    borderWidth: wp(0.5),
  },
  dogtext: {
    color: 'black',
    fontWeight: '800',
    textAlign: 'center',
    fontSize: hp(1.5), // Adjust text size based on screen height
  },
});
