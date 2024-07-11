import React from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import DescribeCard from '../component/describeCard';

export default function DescribePage(){
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <DescribeCard 
            imageSource={require('../images/dog.png')}
            description="This is an example of a card component that includes an image and text. You can customize this content to fit your needs."
             />
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#f0f0f0',
      flexGrow: 1,
    }
});
    
   