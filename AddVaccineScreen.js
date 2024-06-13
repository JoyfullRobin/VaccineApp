function AddVaccineScreen({ navigation }) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const handleSave = async () => {
        const newVaccine = { id: Date.now().toString(), name, date };
        try {
            const vaccines = JSON.parse(await AsyncStorage.getItem('vaccines')) || [];
            vaccines.push(newVaccine);
            await AsyncStorage.setItem('vaccines', JSON.stringify(vaccines));
            navigation.goBack();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicionar Nova Vacina</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome da Vacina"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Data da Vacinação"
                value={date}
                onChangeText={setDate}
            />
            <Button title="Salvar" onPress={handleSave} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
        color: '#333333',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default AddVaccineScreen;
