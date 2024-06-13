import React, { useState } from 'react';
import { View, Text, TextInput,Button, AsyncStorage } from 'react-native'; 
function AddVaccineScreen({
    navigation }) {
        const [name, setName] = useState(''); const [date, setDate] = useState(''); const handleSave = async () => {
            const newVaccine = { id: Date.now().toString(), name, date }; try {
                const vaccines = JSON.parse(await AsyncStorage.getItem('vaccines')) || [];
                vaccines.push(newVaccine); await AsyncStorage.setItem('vaccines',
                    JSON.stringify(vaccines)); navigation.goBack();
            } catch (error) {
                console.error(error);
            }
        }; return (<View> <Text>Adicionar Nova Vacina</Text> <TextInput placeholder="Nome da Vacina" value={name}
                onChangeText={setName} /> <TextInput placeholder="Data da Vacinação"
                    value={date} onChangeText={setDate} /> <Button title="Salvar"
                        onPress={handleSave} /> </View>);
} export default AddVaccineScreen;