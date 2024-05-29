import 'react-native-gesture-handler';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CardData from '../components/CardData';
import {getProducts, ProductsCategory} from '../services/Products_services';
import BottomTab from '../components/BottomTab';
import {SelectList} from 'react-native-dropdown-select-list';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import { BASE_URL } from '../services/base_url';

const AllProductPage = () => {
  const userToken = useSelector(state => state.user.token);
  useEffect(() => {
    handleProducts();
    categoryData();
  }, []);

  let headers = {};
  if (userToken) {
    headers = {
      'Content-Type': 'application/json',
      Authorization: `Token ${userToken}`,
    };
  }

  const route = useRoute();
  const {category_name} = route.params;
  if (!category_name) {
    category_name = '';
  }

  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortTerm, setSortTerm] = useState('')

  const handleBackPress = () => {
    navigation.navigate('Tabs');
  };
  const handleProducts = async () => {
    try {
      // category_name = ''
      // let res = await getProducts();
      let res = await axios.get(
        `${BASE_URL}api/v1/items/?category__name=${category_name}`,
        {headers: headers},
      );
      setProducts(res.data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const [categoriesData, setCategoriesData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [cat, setCat] = useState('');
  const categoryData = async () => {
    try {
      let res = await ProductsCategory();
      // setSelectedCategory(res.results.map(item => ({ key: item.id.toString(), value: item.name })))
      const categories = res.results.map(item => ({
        key: item.id.toString(),
        value: item.name,
      }));

      // Add "All Categories" option to the beginning of the categories list
      const categoriesWithAll = [
        {key: 'all-categories', value: 'all-categories'},
        ...categories,
      ];

      setSelectedCategory(categoriesWithAll);

      // setCategoriesData(res.results[3].name);
    } catch (error) {
      console.log(error);
    }
  };

  const categoryList = async selectedValue => {
    let val = selectedValue;
    if (val == 'all-categories') {
      val = '';
    }
    setCat(val);
    console.log('new', val);
    let finalURL = `${BASE_URL}api/v1/items/?category__name=${val}`;

    try {
      const response = await axios.get(finalURL, {
        headers: headers,
      });
      setProducts(response.data.results);
    } catch (error) {
      console.log(error);
    }
    // Update the category_name query parameter value with the selected category
    // navigation.setParams({ category_name: val });
  };

  const [sort, SetSort] = useState('');
  
  const data = [
      {key:'price', value:'Price: Low to High'},
      {key:'-price', value:'Price: High to Low'},
      {key:'title', value:'Alphabets: A-Z'},
      {key:'-title', value:'Alphabets: Z-A'},
      {key:'created_a', value:'Latest'},
      {key:'-created_a', value:'Old'},
  ]
  const swappedData = data.map(item => ({
    key: item.value,
    value: item.key,
  }));
  const handleSort = async (e) =>{
    let val = e
    SetSort(val)
    console.log(sort)
    let res = await axios.get(`${BASE_URL}api/v1/items/?ordering=${val}`)
    console.log('-------------------------',res.data.results)
    setProducts(res.data.results);
  }
  return (
    <View style={styles.maincontainer}>
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
      <View>
        <Text>Sort By:</Text>
        <SelectList
          setSelected={handleSort} 
          data={swappedData} 
          save="key"
          // onSelect={() => alert(selected)} 
          label="Categories"
          search={false} 
        />
      </View>
      <View>
        <Text style={{color: '#bfbfbf', textAlign: 'center'}}>
          {category_name ? category_name : 'NO'}
        </Text>
        <Text>Select an option:</Text>
        <SelectList
          setSelected={categoryList}
          data={selectedCategory}
          save="value"
        />
      </View>
      <ScrollView>
        <View style={styles.container11}>
          <CardData
            products={products}
            loading={loading}
            error={error}
            handleFavList={handleProducts}
          />
        </View>
        <View style={{padding: 5}}></View>
      </ScrollView>
      <BottomTab style={{position: 'absolute'}} />
    </View>
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

export default AllProductPage;
