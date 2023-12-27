import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
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
    paddingTop: 10,
  },
  image: {
    width: wp(18),
    height: wp(18),
    borderRadius: wp(11),
    marginRight: wp(3),
  },
  firstImage: {
    marginLeft: wp(1), // Adjust the spacing for the first image
  },
  dogtext: {
    // paddingLeft: 12,
    color: 'black',
    fontWeight: '800',
    textAlign: 'center',
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
