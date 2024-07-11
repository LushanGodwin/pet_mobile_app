import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DescribeCard = ({ imageSource, description }) => {
  return (
        <View style={styles.card}>
          <Image source={imageSource} style={styles.cardImage} />
          <Text style={styles.cardText}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
      margin: 10,
      overflow: 'hidden', // Ensures rounded corners for the image
    },
    cardImage: {
      width: '100%',
      height: 200,
    },
    cardText: {
      padding: 15,
      fontSize: 16,
      color: '#333',
    },
  });

export default DescribeCard;
