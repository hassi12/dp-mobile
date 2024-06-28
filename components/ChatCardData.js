import React from 'react';
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
// import { Card } from "react-native-paper";
import moment from 'moment';

const ChatsCardDtata = ({data, loading}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {loading ? (
          <View style={styles.spinnerContainer}>
            <ActivityIndicator size="large" color="#28a745" />
          </View>
        ) : data.length === 0 ? (
          <Text style={styles.noQuestionsText}>No Questions available.</Text>
        ) : (
          <ScrollView>
            {data.map(item => {
              return (
                <View style={styles.cardContainer} key={item.id}>
                  <View style={styles.card}>
                    <TouchableOpacity style={styles.button}>
                      <View style={styles.avatar}>
                        <Text style={styles.avatarText}>
                          {item?.user_first_name.substring(0, 1)}
                        </Text>
                      </View>
                      <View style={styles.content}>
                        <View>
                          <View style={styles.ques_date}>
                            <Text style={styles.questionBy}>
                              Question By {item?.user_first_name}{' '}
                              {item?.user_last_name}
                            </Text>
                            <Text style={styles.timestamp}>
                              {moment(item?.created_at)
                                .startOf('minutes')
                                .fromNow()}
                            </Text>
                          </View>

                          <Text style={styles.questionUser}>
                            {item?.question_text}?
                          </Text>
                          <Text style={styles.answerUser}>
                            {item?.answer_text}.
                          </Text>
                        </View>
                        <View></View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  noQuestionsText: {
    textAlign: 'center',
    margin: 20,
    color: 'red',
    fontSize: 18,
  },
  cardContainer: {
    width: '100%',
    marginTop: 10,
  },
  card: {
    borderRadius: 10,
    borderColor: 'green',
    borderWidth: 1,
    shadowRadius: 1,
    backgroundColor: 'white', // Add background color to the card
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  button: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#008080',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  questionBy: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  questionUser: {
    marginBottom: 0,
    fontWeight: 'bold',
    fontSize: 14,
  },
  answerUser: {
    opacity: 0.75,
    fontSize: 12,
  },
  timestamp: {
    opacity: 0.5,
   fontSize: 10,
    marginLeft: 10,
  },
  ques_date:{
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default ChatsCardDtata;
