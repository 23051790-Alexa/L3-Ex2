import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const questions = [
    { id: 1, image: require('./assets/tiger.jpg'), correctAnswer: 'Tiger' },
    { id: 2, image: require('./assets/elephant.jpg'), correctAnswer: 'Elephant' },
    { id: 3, image: require('./assets/owl.jpg'), correctAnswer: 'Owl' },
];

const App = () => {
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));

    const handlePickerChange = (questionId, value) => {
        const updatedAnswers = [...answers];
        updatedAnswers[questionId - 1] = value;
        setAnswers(updatedAnswers);
    };

    const handleSubmit = () => {
        const correctCount = answers.filter((answer, index) => answer === questions[index].correctAnswer).length;
        Alert.alert(`You got ${correctCount} out of ${questions.length} correct!`);
    };

    return (
        <View style={styles.container}>
            {questions.map((question) => (
                <View key={question.id} style={styles.card}>
                    <Image source={question.image} style={styles.image} />
                    <Text style={styles.questionText}>What animal is this?</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={answers[question.id - 1]}
                            onValueChange={(itemValue) => handlePickerChange(question.id, itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Select an answer" value="" />
                            <Picker.Item label="Tiger" value="Tiger" />
                            <Picker.Item label="Elephant" value="Elephant" />
                            <Picker.Item label="Owl" value="Owl" />
                            <Picker.Item label="Bee" value="Bee" />
                            <Picker.Item label="Crocodile" value="Crocodile" />
                            <Picker.Item label="Deer" value="Deer" />
                            <Picker.Item label="Giraffe" value="Giraffe" />
                            <Picker.Item label="Hummingbird" value="Hummingbird" />
                            <Picker.Item label="Kingfisher" value="Kingfisher" />
                            <Picker.Item label="Leopard" value="Leopard" />
                            <Picker.Item label="Peacock" value="Peacock" />
                            <Picker.Item label="Penguin" value="Penguin" />
                            <Picker.Item label="Rabbit" value="Rabbit" />
                            <Picker.Item label="Squirrel" value="Squirrel" />
                            <Picker.Item label="Turtle" value="Turtle" />
                            <Picker.Item label="Zebra" value="Zebra" />
                        </Picker>
                    </View>
                </View>
            ))}
            <View style={styles.buttonContainer}>
                <Button title="Submit Answers" onPress={handleSubmit} color="#4CAF50" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 8,
        marginBottom: 10,
    },
    questionText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
    },
    pickerContainer: {
        width: '100%',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        overflow: 'hidden',
    },
    picker: {
        width: '100%',
        height: 50,
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
});

export default App;

