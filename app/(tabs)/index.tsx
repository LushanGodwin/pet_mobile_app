import React from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import Card from '@/components/card';
import { useRouter } from 'expo-router';

export default function DashboardPage() {
    const router = useRouter();

    const handleButtonPress = () => {
        router.push('/details');
    };

    return (
        <ScrollView>
<View style={styles.container}>
                <Card
                    imageSource={require('../../assets/images/dog.png')}
                    buttonText="Read More"
                    onButtonPress={handleButtonPress}
                />
                <Card
                    imageSource={require('../../assets/images/dog1.png')}
                    buttonText="Read More"
                    onButtonPress={handleButtonPress}
                />
                <Card
                    imageSource={require('../../assets/images/dog2.png')}
                    buttonText="Read More"
                    onButtonPress={handleButtonPress}
                />
                <Card
                    imageSource={require('../../assets/images/dog3.png')}
                    buttonText="Read More"
                    onButtonPress={handleButtonPress}
                />
                <Card
                    imageSource={require('../../assets/images/dog.png')}
                    buttonText="Read More"
                    onButtonPress={handleButtonPress}
                />
                <Card
                    imageSource={require('../../assets/images/dog.png')}
                    buttonText="Read More"
                    onButtonPress={handleButtonPress}
                />
        </View>
        </ScrollView>
        
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
