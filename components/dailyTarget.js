import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';


export default function DailyTarget({ onTargetSet }) {
  const [dailyTarget, setDailyTarget] = useState(0);
  const [inputValue, setInputValue] = useState("");


  const PostUsersDailyTarget = async () => {
    try {
      const response = await fetch('http://localhost:4000/userTarget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "date": new Date().toISOString().slice(0, 10),
          "targetAmount": dailyTarget
        })
      });
      const responseData = await response.json();
      console.log(responseData);
      if (response.status === 200) {
        console.log('Target is set====================> V');
        Alert.alert('Ready!', 'Target is set', [
          {
            text: 'Okay',
            style: 'cancel'
          }
        ]);
      }
    } catch (err) {
      console.log(err);
      Alert.alert('Error', 'Something went wrong', [
        {
          text: 'Okay',
          style: 'cancel'
        }
      ]);
    }
  };

  const handleSetTarget = () => {
    if (inputValue === "" || isNaN(inputValue) || parseInt(inputValue, 10) <= 0) {
      Alert.alert('Error', 'Please enter a valid target');
      return;
    }
    const target = parseInt(inputValue, 10);
    setDailyTarget(target);
    onTargetSet(target);
    PostUsersDailyTarget();
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.leftContent}>
           {dailyTarget === 0 &&
            <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Target"
              keyboardType="numeric"
              onChangeText={(text) => setInputValue(text)}
              value={inputValue.toString()}
            />
            <TouchableOpacity onPress={handleSetTarget}>
              <Ionicons name="checkmark-circle-outline" size={30} color="orange" />
            </TouchableOpacity>
          </View>}
          {dailyTarget !== 0 && (
            <View style={styles.inputContainer}>
     
            <Text style={styles.textStyle}>Daily Target: {dailyTarget}</Text>
            <TouchableOpacity onPress={() => setDailyTarget(0)}>
              <Ionicons name="close-circle-outline" size={30} color="red" margin={10} />
            </TouchableOpacity>
          </View>
          )}
    

        </View>
        <Ionicons name="water" size={120} color="#3EBDF4" style={styles.iconStyle} />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#AEE3FA',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    width: '90%',
    alignSelf: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    flex: 1,
    marginRight: 10,
  },
  textStyle: {
    fontSize: 24,
    color: "#244A84",
    textAlign: "center",
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#244A84",
    borderRadius: 5,
    width: 150,
    textAlign: 'center',
    backgroundColor: '#FFF',
    marginRight: 10,
    fontSize: 20,
  },
  iconStyle: {
    alignSelf: 'flex-end',
  },
});
