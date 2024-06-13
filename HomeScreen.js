import React from 'react'; import { View, Text, Button } from 'react-native'; 

const HomeScreen = ({ navigation }) => { 
    return ( 
    <View>
    <Text>Bem-vindo ao Registro de Vacinas</Text> <Button title="Ver Registros
        de Vacinas" onPress={() => navigation.navigate('VaccineRecord')} /> <Button
    title="Adicionar Nova Vacina" onPress={() =>
    navigation.navigate('AddVaccine')} /> </View> ); }; export default
    HomeScreen;
