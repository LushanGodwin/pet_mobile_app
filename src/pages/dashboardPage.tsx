import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Card from '../component/card';

export default function DashboardPage() {
    const handleButtonPress = () => {
        Alert.alert("Button Pressed!");
    };

    return (
        <View style={styles.container}>
                <Card
                    imageSource={require('../images/dog.png')}
                    buttonText="Read More"
                    onButtonPress={handleButtonPress}
                />
                <Card
                    imageSource={require('../images/dog1.png')}
                    buttonText="Read More"
                    onButtonPress={handleButtonPress}
                />
                <Card
                    imageSource={require('../images/dog2.png')}
                    buttonText="Read More"
                    onButtonPress={handleButtonPress}
                />
                <Card
                    imageSource={require('../images/dog3.png')}
                    buttonText="Read More"
                    onButtonPress={handleButtonPress}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-around',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
});
