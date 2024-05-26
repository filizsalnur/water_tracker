import React,{useState, useEffect} from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity,TouchableWithoutFeedback, Keyboard } from "react-native";
import globalStyles from "../styles/global";
import { MaterialIcons } from '@expo/vector-icons';
import WaterDrop from "../components/waterDrop";
import AddWater from "../components/addWater";
import DailyTarget from "../components/dailyTarget";

 
 export default function HomePage({route} ) {


  
  const {usersDailyTargetForParent, setDrinkedWaterAmountForParent, setUsersDailyTargetForParent,drinkedWaterAmountForParent, handleTargetSetForParent, addWaterForParent} = route.params;
  



    useEffect(() => {
      setDrinkedWaterAmount(drinkedWaterAmountForParent);
    }, [drinkedWaterAmountForParent]);
  

const [usersDailyTarget, setUsersDailyTarget] = useState(0);
const [drinkedWaterAmount, setDrinkedWaterAmount] = useState(0);

const handleTargetSet=(target)=>{
    setUsersDailyTarget(target)
    console.log(target + " is the target")
    handleTargetSetForParent(target,setUsersDailyTargetForParent)
  }

const handleConsumedSet=(consumed)=>{
  setDrinkedWaterAmount(consumed);
  console.log(consumed + " is the consumed amount")

}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={globalStyles.container}>
      <Text style={styles.header}>Today</Text>
      
      <View style={styles.infoContainer}>
        {/* <MaterialIcons
          name="info"
          size={20}
          color="#244A84"
          style={{ marginRight: 8, marginTop: 2 }}
        /> */}
        <DailyTarget onTargetSet={handleTargetSet} />
        
      </View>
      

       <View style={styles.circleContainer}>
        <View style={styles.circle}>
           <WaterDrop targetAmount={usersDailyTarget.toString()} drinkedWaterAmount={drinkedWaterAmount} />
        </View>
      </View>
      <View>        
         <AddWater handleConsumedSet={handleConsumedSet}/>
      </View> 
       


    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    marginTop: 10,
    color: '#244A84',
    fontSize: 23,
    fontWeight: 'bold'
  },
  textStyle: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 15,
    color: "#244A84"
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circleContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  circle: {
    width: 300,
    height: 300,
    borderRadius: 150, 
    backgroundColor: '#2076FF',  
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 12,
    borderColor: '#064FDA',  
  },
  
});
