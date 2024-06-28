import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import CheckoutPage from './CheckoutPage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ChatsCardDtata from '../components/ChatCardData';
import {GetPersonalQuestionListings} from '../services/Ques_ans_service';
import {useSelector} from 'react-redux';

const User_ques_ans_page = () => {
  const navigate = useNavigation();
  const userToken = useSelector(state => state.user.token);
  const user = useSelector(state => state.user);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    personalQuestionListData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let headers = {};
  if (userToken) {
    headers = {
      'Content-Type': 'application/json',
      Authorization: `Token ${userToken}`,
    };
  }

  const personalQuestionListData = async () => {
    try {
      let ListData = await GetPersonalQuestionListings(headers);
      setData(ListData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={style.container1}>
      <View
        style={{
          width: wp(100),
          height: 45,
          backgroundColor: 'white',
          borderRadius: 4,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.3,
          shadowRadius: 4,
          borderBottomWidth: 0.2,
          flexDirection: 'row',
        }}>
        <TouchableOpacity style={{}}>
          <AntDesign
            name="left"
            style={{
              fontSize: 20,
              color: 'black',
              marginTop: 10,
              marginLeft: 10,
            }}
            onPress={() => navigate.navigate('Tabs')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 60,
            marginTop: 10,
          }}>
          My Questions & Answers
        </Text>
      </View>
      <View style={style.usernameCntainer}>
        <Text style={style.userName}>Hello! {user?.user?.username}</Text>
      </View>
      <View style={{flex: 1}}>
        <ChatsCardDtata data={data} loading={loading} />
      </View>
    </SafeAreaView>
  );
};

export default User_ques_ans_page;

const style = StyleSheet.create({
  container1: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  usernameCntainer: {
    marginTop: 30,
    alignItems: 'center',
  }
});
