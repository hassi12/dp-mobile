import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function PetProfile({category}) {

  const navigate = useNavigation();
  const handlePress = () => {
    // Navigate to another screen with category name as a parameter
    navigate.navigate('AllProductPage', { category_name: category.name });
  };
  return (
    <TouchableOpacity onPress={handlePress}>
    <View style={styles.card}>
        <View style={styles.container}>
          <Image
            source={{ uri: category.image_url }}
            style={[styles.image, styles.firstImage]}
          />
          <Text style={styles.categoryText}>{category.name}</Text>
        </View>
      </View>
  </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  card: {
    marginVertical: hp(1), // Add margin between cards
    marginHorizontal: hp(1.5) //
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(8), // Half of the width and height for circular image
    borderWidth: wp(0.5),
    borderColor: 'rgba(0, 0, 0, 0.1)', // border color with transparency
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: wp(2),
    elevation: wp(2),
  },
  firstImage: {
    marginBottom: wp(1), // Add margin bottom to the image
  },
  categoryText: {
    color: 'black',
    fontWeight: '800',
    textAlign: 'center',
    fontSize: hp(1.3), // Adjust text size based on screen height
  },
});
