import React,{useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import HomePage from './screens/home';
import AnalysisPage from './screens/analysis';
import {MaterialIcons} from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const [usersDailyTargetForParent, setUsersDailyTargetForParent] = useState(0);
  const [drinkedWaterAmountForParent, setDrinkedWaterAmountForParent] = useState(1);

  const addWaterForParent =  (amount) => {
    const prevAmount = drinkedWaterAmountForParent;
    console.log('Previous amount FOR PARENT:', prevAmount);
    const newDrinkedWaterAmount = prevAmount + amount;
    console.log('New drinked water amount FOR PARENT:', newDrinkedWaterAmount);
     setDrinkedWaterAmountForParent(newDrinkedWaterAmount);
    console.log('DRINKED WATER AMOUNT FOR PARENT:', drinkedWaterAmountForParent);
  }

  const handleTargetSetForParent = (target, setUsersDailyTargetForParent) => {
    setUsersDailyTargetForParent(target);
    console.log('TARGET FOR PARENT:', usersDailyTargetForParent)
   }


  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle:{
        backgroundColor:"white",
    
      }
    }}
     >
      
      <Tab.Screen
        name="Main"
        component={HomePage}
        initialParams={{ usersDailyTargetForParent,setDrinkedWaterAmountForParent, setUsersDailyTargetForParent, drinkedWaterAmountForParent, handleTargetSetForParent, addWaterForParent }}
        options={{
        
          headerTitle: "Water Tracker",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
          
           
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 5,
          },
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#27303D"
          },
          headerRight: () => (
            <MaterialIcons
              name="settings"
              size={24}
              color="#fff"
               style={{ marginRight: 10 }}

            />
          ),
        }}
      />
      <Tab.Screen
      
        name="Analysis"
        component={AnalysisPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chart-line" color={color} size={30} />
          ),
          headerTitle: "Water Tracker",
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 5,
          },
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#27303D"
          },
          headerRight: () => (
            <MaterialIcons 
              name="settings"
              size={24}
              color="#fff"
              style={{ marginRight: 20 }}
            />
          ),
        }}

      />
     </Tab.Navigator>
  );
}
