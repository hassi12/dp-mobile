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
;


const DetailPage = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate('Tabs');
  };


  return (
    <ScrollView style={styles.maincontainer}>
      <View style={styles.container1}>
        <TouchableOpacity onPress={handleBackPress}>
          <AntDesign
            name="left"
            size={25}
            style={{color: 'black'}}
            marginLeft={15}
          />
        </TouchableOpacity>
        <Text style={styles.seeAllText}>All Products</Text>
      </View>
      <Text style={{color: '#bfbfbf', width: wp(98), textAlign: 'center'}}>
        ______________________________________________________
      </Text>
      <View style={styles.container11}>
        <View style={styles.horizontalView}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              width: wp(44),
              marginRight: 18,
              position: 'relative',
              borderColor: 'gray',
              borderWidth: 1,
              marginLeft: 7,
            }}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: 10,
                right: 6,
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 2,
              }}>
              <AntDesign name="heart" size={15} color="red" />
            </TouchableOpacity>

            <TouchableOpacity style={{width: wp(35)}}>
              <Image
                source={require('../assets/petfood32.png')}
                style={styles.image}
              />
            </TouchableOpacity>

            <Text style={styles.priceText}>Pedigree Vital</Text>
            <Text style={{paddingLeft: 10, fontSize: 13}}>
              Beef & Vegetablesss
            </Text>
            <Text style={styles.priceText}>Rs. 230</Text>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                backgroundColor: '#eb2d1c',
                borderRadius: 20,
                padding: 5,
              }}>
              <AntDesign name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View />

          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              width: wp(44),
              marginRight: 5,
              position: 'relative',
              borderColor: 'gray',
              borderWidth: 1,
            }}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: 10,
                right: 6,
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 2,
              }}>
              <AntDesign name="heart" size={15} color="red" />
            </TouchableOpacity>

            <TouchableOpacity style={{width: wp(35)}}>
              <Image
                source={require('../assets/petfood32.png')}
                style={styles.image}
              />
            </TouchableOpacity>

            <Text style={styles.priceText}>Pedigree Vital</Text>
            <Text style={{paddingLeft: 10, fontSize: 13}}>
              Beef & Vegetables
            </Text>
            <Text style={styles.priceText}>Rs. 230</Text>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                backgroundColor: '#eb2d1c',
                borderRadius: 20,
                padding: 5,
              }}>
              <AntDesign name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View />
        </View>
      </View>
      <View style={styles.container11}>
        <View style={styles.horizontalView}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              width: wp(44),
              marginRight: 18,
              position: 'relative',
              borderColor: 'gray',
              borderWidth: 1,
              marginLeft: 7,
            }}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: 10,
                right: 6,
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 2,
              }}>
              <AntDesign name="heart" size={15} color="red" />
            </TouchableOpacity>

            <TouchableOpacity style={{width: wp(35)}}>
              <Image
                source={require('../assets/petfood32.png')}
                style={styles.image}
              />
            </TouchableOpacity>

            <Text style={styles.priceText}>Pedigree Vital</Text>
            <Text style={{paddingLeft: 10, fontSize: 13}}>
              Beef & Vegetables
            </Text>
            <Text style={styles.priceText}>Rs. 230</Text>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                backgroundColor: '#eb2d1c',
                borderRadius: 20,
                padding: 5,
              }}>
              <AntDesign name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View />

          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              width: wp(44),
              marginRight: 5,
              position: 'relative',
              borderColor: 'gray',
              borderWidth: 1,
            }}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: 10,
                right: 6,
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 2,
              }}>
              <AntDesign name="heart" size={15} color="red" />
            </TouchableOpacity>

            <TouchableOpacity style={{width: wp(35)}}>
              <Image
                source={require('../assets/petfood32.png')}
                style={styles.image}
              />
            </TouchableOpacity>

            <Text style={styles.priceText}>Pedigree Vital</Text>
            <Text style={{paddingLeft: 10, fontSize: 13}}>
              Beef & Vegetables
            </Text>
            <Text style={styles.priceText}>Rs. 230</Text>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                backgroundColor: '#eb2d1c',
                borderRadius: 20,
                padding: 5,
              }}>
              <AntDesign name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View />
        </View>
      </View>
      <View style={styles.container11}>
        <View style={styles.horizontalView}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              width: wp(44),
              marginRight: 18,
              position: 'relative',
              borderColor: 'gray',
              borderWidth: 1,
              marginLeft: 7,
            }}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: 10,
                right: 6,
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 2,
              }}>
              <AntDesign name="heart" size={15} color="red" />
            </TouchableOpacity>

            <TouchableOpacity style={{width: wp(35)}}>
              <Image
                source={require('../assets/petfood32.png')}
                style={styles.image}
              />
            </TouchableOpacity>

            <Text style={styles.priceText}>Pedigree Vital</Text>
            <Text style={{paddingLeft: 10, fontSize: 13}}>
              Beef & Vegetables
            </Text>
            <Text style={styles.priceText}>Rs. 230</Text>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                backgroundColor: '#eb2d1c',
                borderRadius: 20,
                padding: 5,
              }}>
              <AntDesign name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View />

          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              width: wp(44),
              marginRight: 5,
              position: 'relative',
              borderColor: 'gray',
              borderWidth: 1,
            }}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: 10,
                right: 6,
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 2,
              }}>
              <AntDesign name="heart" size={15} color="red" />
            </TouchableOpacity>

            <TouchableOpacity style={{width: wp(35)}}>
              <Image
                source={require('../assets/petfood32.png')}
                style={styles.image}
              />
            </TouchableOpacity>

            <Text style={styles.priceText}>Pedigree Vital</Text>
            <Text style={{paddingLeft: 10, fontSize: 13}}>
              Beef & Vegetables
            </Text>
            <Text style={styles.priceText}>Rs. 230</Text>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                backgroundColor: '#eb2d1c',
                borderRadius: 20,
                padding: 5,
              }}>
              <AntDesign name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View />
        </View>
      </View>

      <View style={{padding: 5}}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
    margin: 2,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },

  seeAllText: {
    fontWeight: 'bold',
    paddingRight: 150,
    fontSize: 20,
    color: 'black',
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 8,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
  },

  bottomview: {
    width: wp(99.5),
    paddingBottom: 12,
  },
  petsview: {
    width: wp(99.5),
    height: hp(20),
    borderColor: 'black',
    paddingTop: 15,
  },
  petstyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 15,
  },
  agentImageStyle: {
    marginRight: wp(10),
    borderRadius: wp(300) / 2,
    overflow: 'hidden',
  },

  sliderviewstyle: {
    height: hp(25),
    width: wp(95),
    borderRadius: 15, // Add this line to set the border radius
    overflow: 'hidden',
  },
  container11: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  horizontalView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: wp(97),
  },
  image: {
    width: wp(40),
    height: hp(21),
    borderRadius: 15,
    marginTop: 3,
  },

  containertext: {
    flexDirection: 'row', // Align children in a row
    alignItems: 'center', // Center vertically
    paddingTop: 10,
    paddingBottom: 10,
  },
  titleText: {
    fontWeight: 'bold',
    color: 'black',
  },

  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
});

export default DetailPage;
