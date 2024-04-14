import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native";

 


 


export default function DailyTarget({onTargetSet}) {
 
  const [dailyTarget, setDailyTarget] = useState(0);
  const [inputValue, setInputValue] = useState(0);


  const PostUsersDailyTarget=async()=>{
    try{
      const response=await fetch('http://localhost:4000/userTarget', {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          "date": new Date().toISOString().slice(0,10),
          "targetAmount":dailyTarget
        })
      })
      const responseData=await response.json()
      console.log(responseData);
      if(response.status===200){
        console.log('Target is set====================> V');
        Alert.alert('Ready!', 'Target is set',[
          {
            text:'Okay',
            
            style:'cancel'
          
          }
        
        ]);
      }
     } catch(err){
      console.log(err)
      Alert.alert('Error', 'Something went wrong',[
        {
          text:'Okay',   
          style:'cancel'
        }

      ])
    }
   }
  

 
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
    <View style={styles.target}>
      <View style={{flexDirection:'row'}}> 
      <Text style={styles.textStyle}>Daily Water Target: </Text>
      {dailyTarget === 0 ? (
        <View>
             <TextInput
            style={styles.input}
            placeholder="Enter Target"
            keyboardType="numeric"
            onChangeText={(text) => setInputValue(text)} 
            value={inputValue.toString()}  
/>

          <TouchableOpacity onPress={handleSetTarget}>
            <Text style={styles.targetStyle}>Set Target</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.textStyle}>{dailyTarget}</Text>
      )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  target: {
    flexDirection: "column",
    alignItems: "center",
  },
  textStyle: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 15,
    color: "#244A84",
  },
  targetStyle: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 15,
    color: "orange",
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#244A84",
    borderRadius: 5,
    width: 200,
    textAlign: 'center',
  },
});
