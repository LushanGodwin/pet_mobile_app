import { Image, StyleSheet, View ,Text} from "react-native";
import React, { useEffect } from "react";

const Header = () =>{
    return(
        <>
        <View style={styles.container}>
            <Image source={require('../images/Ellipse.png')} style={styles.image} />
            <Text style={styles.word}>Hey Doggy!</Text>
            <Image source={require('../images/leg.png')} style={styles.image1} />
            <View style={styles.hr}></View>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        display:'flex'
    },
    image: {
        top: 10,
        left: 20,
    },
    word:{
        bottom: 40,
        left: 95,
        fontSize: 40,
        color: 'black',
        opacity: 0.5
    },
    image1:{
        bottom: 80,
        left: 310,
        transform: [{ rotate: '0deg' }]
    },
    hr:{
        width: 300,
        height: 1,
        backgroundColor: 'black',
        alignSelf: 'center',
        marginTop: 90,
        marginBottom: 30,
        opacity: 0.5,
        zIndex: -1,
        position: 'absolute'  // this is for hiding the hr when navigating back from other pages.
    }
})

export default Header;