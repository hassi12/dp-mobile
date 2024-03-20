import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import UserProfilePage from './UserProfilePage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';


const UserProfileEditPage = () => {
const navigate = useNavigation();




  return (
    <View>
      <View
        style={{
          width: wp(100),
          shadowOpacity: 0.3,
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
            onPress={() => navigate.navigate('UserProfilePage')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfileEditPage;
