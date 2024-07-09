import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { GetPublicQuestionListings,SubmitUserQuestion } from '../services/Ques_ans_service';
import ChatsCardDtata from '../components/ChatCardData';
import { useSelector } from "react-redux";
import {useNavigation} from '@react-navigation/native';
// import SignIn from './SignIn';
import Toast from 'react-native-toast-message';

const ChatPage = () => {

  const [inputMessage, setInputMessage] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = useSelector((state) => state.user.user?.id);
  const userToken = useSelector((state) => state.user?.token);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigation();


  let headers = {};
  if (userToken) {
    headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${userToken}`,
    };
  }

  useEffect(() => {
    publicQuestionListData()
  },[])

  const publicQuestionListData = async () => {
    try {
       let res = await GetPublicQuestionListings()
       setData(res.results)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  const handleSend = async () => {
    const payload = {
      user: userId,
      question_text: inputMessage,
    };
    try {
        await SubmitUserQuestion(payload, headers);
          Toast.show({
            type: 'success',
            text1: 'Question Submited',
            text2: 'Your Question is Submit Successfully.',
            visibilityTime: 3000,
            color: 'green',
          });
      setInputMessage('');
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <View style={styles.container}>
      {/* Chat Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Customer Support</Text>
      </View>
      <View style={{ flex: 1 }}>
          <ChatsCardDtata data={data} loading={loading} />
      </View>
      {/* Chat Messages */}
       <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        value={inputMessage}
        onChangeText={(text) => setInputMessage(text)}
      />
      {isAuthenticated ? (
        <TouchableOpacity onPress={handleSend}>
        <Icon name="send" size={30} color="#3498db" />
      </TouchableOpacity>
      ) : 
      (<TouchableOpacity onPress={() => navigate.navigate('SignIn')}>
        <Icon name="send" size={30} color="#3498db" />
      </TouchableOpacity>)} 
    </View>
    <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default ChatPage;
