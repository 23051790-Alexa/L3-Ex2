import React, { useState } from 'react';
import { View, Text, Image, Button, Alert } from 'react-native';
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
        <View>
            {questions.map((question) => (
                <View key={question.id}>
                    <Image source={question.image} style={{ width: 200, height: 200 }} />
                    <Text>What animal is this?</Text>
                    <Picker
                        selectedValue={answers[question.id - 1]}
                        onValueChange={(itemValue) => handlePickerChange(question.id, itemValue)}
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
            ))}
            <Button title="Submit Answers" onPress={handleSubmit} />
        </View>
    );
};

export default App;
