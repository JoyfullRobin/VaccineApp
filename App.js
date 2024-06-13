import 'react-native-gesture-handler'; import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; 
import VaccineRecordScreen from'./screens/VaccineRecordScreen'; 
import AddVaccineScreen from './screens/AddVaccineScreen';


const Stack = createStackNavigator();
function App() {
    return ( 
    <NavigationContainer> <Stack.Navigator
    initialRouteName="Home"> 
    <Stack.Screen name="Home" component={HomeScreen}/> 
    <Stack.Screen name="VaccineRecord" component={VaccineRecordScreen} />
    <Stack.Screen name="AddVaccine" component={AddVaccineScreen} /> 
</Stack.Navigator> </NavigationContainer> ); } export default App;

