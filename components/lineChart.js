import {  LineChart, BarChart, PieChart, ProgressChart,ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import { View ,Text, Dimensions} from "react-native";


  export default function LineChartComponent() {
    const minimumLimit=20;

    return (
        <View style={{marginTop:20}}>
   <LineChart
    data={{
      labels: ["Monday", "Sunday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [
        {
          data: [
            Math.random()*100,
            Math.random()*100,
            Math.random()*100,
            Math.random()*100,
            Math.random()*100,
            Math.random()*100,
            Math.random()*100,
          //  50,
          //  60,
          //  70, 
          //  80,
          //  90,
          //  100,
          //  110

          ],
          
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 5 ,// optional
         }
      ],
      legend: ["Daily Consumed Water"] // optional

    }}
    width={Dimensions.get("window").width} // from react-native
    height={250}
    yAxisLabel=""
    yAxisSuffix=""
    xAxisLabel=""
     yAxisInterval={1} // optional, defaults to 1

    chartConfig={{
      
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#131927",
      backgroundGradientTo: "#131927",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 20
      },
      propsForDots: (value, index) => {
        const color = value < minimumLimit ? 'red' : 'green';
        return {
          r: '6',
          strokeWidth: '2',
          stroke: '#ffa726',
          fill: color,
        };
      }
      
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
     
    )

  }