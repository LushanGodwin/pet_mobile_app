import { Image, StyleSheet, View ,Text} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

const TabNavigation = () =>{
    return(
        <>
        
        <View style={styles1.footer}>
            <Image source={require('../images/home.png')} style={styles1.image2} />
        </View>
        </>
    )
}
const styles1 = StyleSheet.create({
    footer:{
        display:'flex',
        backgroundColor:"black",
        height:60,
        width:350,
        left:12,
        borderRadius:10,
        bottom:5,
        padding:5,
        opacity: 0.5,
        zIndex: 2
    },
    image2:{
        bottom: 0,
        left: 20,
        transform: [{ rotate: '0deg' }],
        zIndex: 3
    }
})