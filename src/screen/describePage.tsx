import React from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import Card from '../component/card';

export default function DescribePage(){
    return(
           <View>
            <Card
                    imageSource={require('../images/dog.png')}
                    
                />
           </View>
    )
}