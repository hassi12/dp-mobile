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

export default function PetProfile() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/dog2.jpg')}
          style={[styles.image, styles.firstImage]}
        />

        <Text style={styles.dogtext}>Doggs</Text>
      </View>
      <View>
        <Image
          source={require('../assets/birds2.jpg')}
          style={[styles.image, styles.firstImage]}
        />
        <Text style={styles.dogtext2}>Birds</Text>
      </View>
      <View>
        <Image
          source={require('../assets/cat3.jpg')}
          style={[styles.image, styles.firstImage]}
        />
        <Text style={styles.dogtext3}>Cats</Text>
      </View>
      <View>
        <Image
          source={require('../assets/rabit1.jpeg')}
          style={[styles.image, styles.firstImage]}
        />
        <Text style={styles.dogtext4}>Small Pets</Text>
      </View>
      <View>
        <Image
          source={require('../assets/mix1.jpeg')}
          style={[styles.image, styles.firstImage]}
        />
        <Text style={styles.dogtext5}>Others</Text>
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
    width: wp(20),
    height: wp(20),
    borderRadius: wp(11),
    marginRight: wp(3),
  },
  firstImage: {
    marginLeft: wp(1), // Adjust the spacing for the first image
  },
  dogtext: {
    paddingLeft: 25,
    color: 'black',
    fontWeight: '800',
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
