import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProductPage from './productPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {getProductDetail} from '../services/Products_services';

const CommentPage = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleProductDetail();
  }, [productId]);

  const navigate = useNavigation();
  const route = useRoute();

  const {productId} = route.params;
  const handleProductDetail = async () => {
    try {
      let res = await getProductDetail(productId);
      setComments(res.comments);
      setIsLoading(false);
      console.log(res.comments[0].text);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: wp(100),
          height: hp(6),
          backgroundColor: 'white',
          borderRadius: 4,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.3,
          shadowRadius: 4,
          borderBottomWidth: 0.3,
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <AntDesign
            name="left"
            style={{
              fontSize: 25,
              color: 'black',
              marginTop: 10,
              marginLeft: 10,
            }}
            onPress={() => navigate.navigate('ProductPage', {productId})}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 100,
            marginTop: 10,
            fontSize: 16,
          }}>
          Commnet Section
        </Text>
      </View >
      {/* comment section  */}
      {isLoading ? (
        <Text style={{color:'black', fontSize: 15}}>Loading...</Text>
      ) : comments.length > 0 ? (
        <FlatList
          data={comments}
          renderItem={({item}) => (
            <ScrollView>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 4,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  borderBottomWidth: 0.3,
                  borderRadius: 5,
                  width: wp(97),
                  height: hp(16),
                  marginTop: 10,
                  margin: 5,
                  borderWidth: 0.2,
                  borderRadius: 10,
                }}>
                <View style={styles.stars}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      marginLeft: 10,
                      marginTop: 5,
                    }}>
                    Atif Badini
                  </Text>
                  <MaterialIcons
                    name="star"
                    size={20}
                    style={styles.starUnselected}
                    marginLeft={180}
                  />
                  <MaterialIcons
                    name="star"
                    size={20}
                    style={styles.starUnselected}
                  />
                  <MaterialIcons
                    name="star"
                    size={20}
                    style={styles.starUnselected}
                  />
                  <MaterialIcons
                    name="star-half"
                    size={20}
                    style={styles.starhalf}
                  />
                  <MaterialIcons
                    name="star-outline"
                    size={20}
                    style={styles.starouline}
                  />
                </View>
                <ScrollView style={{flex: 1}}>
                  <Text style={{width: wp(92), color: 'black', marginLeft: 15}}>
                    {item.text}
                  </Text>
                </ScrollView>
              </View>
            </ScrollView>
          )}
        />
      ) : (
        <Text style={{fontSize: 15, color: 'black', textAlign: 'center'}}>
          This product has no reviews
        </Text>
      )}
    </View>
  );
};

export default CommentPage;

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
  },
  starUnselected: {
    color: 'gold',
    marginTop: 5,
  },
  starouline: {
    color: 'lightgray',
    marginTop: 5,
  },
  starhalf: {
    color: 'gold',
    marginTop: 5,
  },
  reviewDetails: {
    flex: 1,
    marginLeft: 10,
  },
  reviewstext1: {
    fontWeight: 'bold',
  },
  reviewstext2: {
    color: 'gray',
  },
});
