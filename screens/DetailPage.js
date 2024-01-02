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
import React, {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CardData from '../components/CardData';
import {getProducts} from '../services/Products_services';

const DetailPage = () => {
  useEffect(() => {
    handleProducts();
  }, []);

  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleBackPress = () => {
    navigation.navigate('Tabs');
  };
  const handleProducts = async () => {
    try {
      let res = await getProducts();
      setProducts(res.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
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
        <CardData products={products} loading={loading} error={error} />
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
