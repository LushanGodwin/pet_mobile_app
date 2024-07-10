import { Image, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

export default function LoadingPage(){
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    useEffect(() => {
        
        // Simulate a delay to show loading page for 3 seconds
        setTimeout(() => {
            // Navigate to start screen after 3 seconds
            navigation.navigate('Start');
        }, 3000);
    },[])


    return (
        <>
        <View style={styles.container}>
            <View style={styles.divStyle}>
                <Image source={require('../images/loading.png')} />
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    divStyle:{
        width: 200,
        height: 200,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#f8f8f8',
        // borderRadius: 10,
    }
});