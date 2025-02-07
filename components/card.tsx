import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Card({ imageSource, buttonText, onButtonPress }) {
    return (
        <View style={styles.card}>
            <Image source={imageSource} style={styles.cardImage} />
            <TouchableOpacity style={styles.cardButton} onPress={onButtonPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '45%',  // Adjust width to fit two cards per row with some spacing
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        alignItems: 'center',
        padding: 10,
        margin: 7,
    },
    cardImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 20,
    },
    cardButton: {
        backgroundColor: '#000000',
        opacity:0.6,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
