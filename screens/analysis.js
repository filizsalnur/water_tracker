import React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import globalStyles from "../styles/global";
import CalendarComponent from "../components/calendar";
import LineChartComponent from "../components/lineChart";


export default function AnalysisPage() {

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={globalStyles.container}>
            <Text style={{ color: "orange", fontSize: 25, textAlign: "center",marginTop:20 }}>
                Intake History
            </Text>
         <CalendarComponent/>
         <LineChartComponent/>
    
        </View>
        </ScrollView>

    );

}

const styles=StyleSheet.create( {
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#131927",
       },




})