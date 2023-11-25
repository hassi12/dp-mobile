import 'react-native-gesture-handler';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DetailPage = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate('Tabs');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity onPress={handleBackPress}>
          <AntDesign
            name="left"
            size={17}
            style={{paddingLeft: 15, color: 'black'}}
          />
        </TouchableOpacity>
        <Text style={styles.seeAllText}>All Products</Text>
      </View>
      <Text style={{color: '#bfbfbf'}}>
        __________________________________________________________
      </Text>
      <View style={styles.container11}>
        <View style={styles.horizontalView}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              width: wp(48),
              marginRight: 5,
              position: 'relative',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../assets/petfood1.jpg')}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.priceText}>Pedigree Vital</Text>
            <Text style={{paddingLeft: 15, fontSize: 13}}>
              Beef & Vegetables
            </Text>
            <Text style={styles.priceText}>Rs. 230</Text>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                backgroundColor: '#eb2d1c',
                borderRadius: 30,
                padding: 10,
              }}>
              <AntDesign name="plus" size={25} color="white" />
            </TouchableOpacity>
          </View>
          <View />
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              width: wp(48),
              marginRight: 5,
            }}>
            <TouchableOpacity>
              <Image
                source={require('../assets/petfood2.jpeg')}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.priceText}>Pedigree Vital</Text>
            <Text style={{paddingLeft: 15, fontSize: 13}}>
              Beef & Vegetables
            </Text>
            <Text style={styles.priceText}>Rs. 230</Text>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                backgroundColor: '#eb2d1c',
                borderRadius: 30,
                padding: 10,
              }}>
              <AntDesign name="plus" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.container11}>
        <View style={styles.horizontalView}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              width: wp(48),
              marginRight: 5,
              position: 'relative',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../assets/petfood1.jpg')}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.priceText}>Pedigree Vital</Text>
            <Text style={{paddingLeft: 15, fontSize: 13}}>
              Beef & Vegetables
            </Text>
            <Text style={styles.priceText}>Rs. 230</Text>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                backgroundColor: '#eb2d1c',
                borderRadius: 30,
                padding: 10,
              }}>
              <AntDesign name="plus" size={25} color="white" />
            </TouchableOpacity>
          </View>
          <View />
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              width: wp(48),
              marginRight: 5,
            }}>
            <TouchableOpacity>
              <Image
                source={require('../assets/petfood2.jpeg')}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.priceText}>Pedigree Vital</Text>
            <Text style={{paddingLeft: 15, fontSize: 13}}>
              Beef & Vegetables
            </Text>
            <Text style={styles.priceText}>Rs. 230</Text>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                backgroundColor: '#eb2d1c',
                borderRadius: 30,
                padding: 10,
              }}>
              <AntDesign name="plus" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.container11}>
        <View style={styles.horizontalView}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              width: wp(48),
              marginRight: 5,
              position: 'relative',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../assets/petfood1.jpg')}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.priceText}>Pedigree Vital</Text>
            <Text style={{paddingLeft: 15, fontSize: 13}}>
              Beef & Vegetables
            </Text>
            <Text style={styles.priceText}>Rs. 230</Text>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                backgroundColor: '#eb2d1c',
                borderRadius: 30,
                padding: 10,
              }}>
              <AntDesign name="plus" size={25} color="white" />
            </TouchableOpacity>
          </View>
          <View />
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 30,
              width: wp(48),
              marginRight: 5,
            }}>
            <TouchableOpacity>
              <Image
                source={require('../assets/petfood2.jpeg')}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.priceText}>Pedigree Vital</Text>
            <Text style={{paddingLeft: 15, fontSize: 13}}>
              Beef & Vegetables
            </Text>
            <Text style={styles.priceText}>Rs. 230</Text>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                backgroundColor: '#eb2d1c',
                borderRadius: 30,
                padding: 10,
              }}>
              <AntDesign name="plus" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },

  seeAllText: {
    fontWeight: 'normal',
    paddingRight: 150,
    fontSize: 15,
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    margin: 2,
  },
  container11: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  containertext: {
    flexDirection: 'row', // Align children in a row
    justifyContent: 'space-between', // Add space between children
    alignItems: 'center', // Center vertically
    paddingTop: 10,
    paddingBottom: 10,
  },
  horizontalView: {
    flexDirection: 'row', // Align children horizontally
    width: wp(99),
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: 'cover',
    margin: 5, // Optional: Add margin between images
    borderRadius: 5, // Optional: Add border radius to the images
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 15,
  },
});

export default DetailPage;
