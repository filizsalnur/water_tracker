import React,{useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Path, Text } from 'react-native-svg';
 
export default function WaterDrop({targetAmount, drinkedWaterAmount}) {

  const centerX = 60;
  const centerY = 180; 

  return (
    <View style={styles.container}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={340}
        height={350}
        viewBox="0 26 120 220"
      >
        <Path
          fill="#263650"
          d="M60 210c33.1 0 60-26.9 60-60 0-33.1-60-100-60-100s-60 66.9-60 100c0 33.1 26.9 60 60 60z"
        />
          <Text
          x={centerX}
          y={centerY-40}
          fill="white"
          fontSize="20"
          textAnchor="middle"
          alignmentBaseline="middle"
        >  
          {targetAmount}
         </Text>
         
         <Text
          x={centerX}
          y={centerY+10}
          fill="white"
          fontSize="20"
          textAnchor="middle"
          alignmentBaseline="middle"
        >  
          {drinkedWaterAmount}
         </Text>
       </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});