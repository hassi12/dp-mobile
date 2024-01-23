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
    marginTop: 5,
  },
  image: {
    width: wp(16),
    height: wp(16),
    borderRadius: wp(9),
    marginRight: wp(3),
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)', // border color with transparency
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  firstImage: {
    marginLeft: wp(1.5),
    borderWidth: 1,
  },
  dogtext: {
    color: 'black',
    fontWeight: '800',
    textAlign: 'center',
    fontSize: 12
  },
  dogtext2: {
    paddingLeft: 27,
    color: 'black',
    fontWeight: '800',
  },
  dogtext3: {
    paddingLeft: 28,
    color: 'black',
    fontWeight: '800',
  },
  dogtext4: {
    paddingLeft: 10,
    color: 'black',
    fontWeight: '800',
  },
  dogtext5: {
    paddingLeft: 25,
    color: 'black',
    fontWeight: '800',
  },
});
