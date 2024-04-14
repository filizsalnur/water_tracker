import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { View , StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const CalendarComponent = () => {
  const [selected, setSelected] = useState('');
   return (
    <View style={styles.container}>
    <Calendar
    theme={{
      backgroundColor: 'white',
      calendarBackground: '#131927',
      textSectionTitleColor: 'white',
      selectedDayBackgroundColor:"red", 
      selectedDayTextColor: '#ffffff',
      todayTextColor: 'green',
      dayTextColor: 'cyan',
      textDisabledColor: 'gray',
      dotColor: '#00adf5',
      selectedDotColor: '#ffffff',
      arrowColor: 'orange',
      disabledArrowColor: '#d9e1e8',
      monthTextColor: 'white',
      indicatorColor: 'white',
      textDayFontSize: 16,
      textMonthFontSize: 16,
      textDayHeaderFontSize: 16,
      textInactiveColor: 'white',
    }}
    
      onDayPress={day => {
        styles.container.backgroundColor = 'red';
           console.log('selected day', day);
        }}






        markingType={'period'}
        markedDates={{
          '2024-05-15': {marked: true, dotColor: '#50cebb'},
          '2024-05-16': {marked: true, dotColor: '#50cebb'},
          '2024-05-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
          '2024-05-22': {color: '#70d7c7', textColor: 'red'},
          '2024-05-23': {color: '#70d7c7', textColor: 'red', marked: true, dotColor: 'white'},
          '2024-05-24': {color: '#70d7c7', textColor: 'red'},
          '2024-05-25': {endingDay: true, color: 'red', textColor: 'white'}
        }}
    />
    </View>
  );
};

export default CalendarComponent;


const styles=StyleSheet.create({
    container:{
 
       marginTop:5
    }
})