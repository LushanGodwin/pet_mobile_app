import { Image, StyleSheet, View ,Text} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

export default function StartPage(){
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    useEffect(() => {
        
        // Simulate a delay to show loading page for 3 seconds
        setTimeout(() => {
            // Navigate to dashboard screen after 6 seconds
            navigation.navigate('Dashboard');
        }, 6000);
    },[])
    return(
        <>
        <View style={framContainer.fullPageContainer}>
            <View style={styles.container}>
                <Image source={require('../images/image.png')}></Image>      
            </View>

            <View style={styles.container1}>
            <Image source={require('../images/image.png')}></Image>
            </View>
 
            <View style={styles.step2}>
            <Image source={require('../images/image.png')}></Image>
            </View>

            <View style={styles.step3}>
            <Image source={require('../images/image.png')}></Image>
            </View>

            <View style={ellips.logo}>
            <Image source={require('../images/Ellipse.png')}></Image>
            </View>

            <View>
                <Text style={label.firstText}>Barking Up the Best Features...</Text>
            </View>

            <View>
                <Text style={label.secondText}>"Connect with your furry friends, track their activities,</Text>
                <Text style={label.secondText}> and find nearby pet services with ease. All-in-one app for pet lovers!"</Text>
            </View>

            <View style={photo.secImage}>
            <Image source={require('../images/doggy.png')}></Image>
            </View>

        </View>
            
            
        </>
    )

}
const framContainer= StyleSheet.create({
    fullPageContainer:{
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
    }
})


const styles = StyleSheet.create({
    container: {
        top:140,
        right: 135,
    },
    container1:{
        top:80,
        right: 80,
    },
    step2:{
        top:70,
        right: 30,
    },
    step3:{
        top:10,
        left: 30,
    }
});
const ellips= StyleSheet.create({
    logo:{
        bottom:30,
        left: 120,
    }
});
const label= StyleSheet.create({
    firstText:{
        top:50,
        right:30,
        fontSize:30,
        fontWeight:'bold',
        color:'#000',

    },
    secondText:{
        top:50,
        fontSize:12,
        color:'#000',
    }
})
const photo= StyleSheet.create({
    secImage:{
        top: 30,
        left: 10,
    }
})

