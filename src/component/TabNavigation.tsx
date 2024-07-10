import { Image, StyleSheet, View ,Text} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardPage from "../screen/dashboardPage";
import DescribePage from "../screen/describePage";
import RegisterPage from "../screen/registerPage";

const Tab = createBottomTabNavigator();

const TabNavigation = () =>{
    return(
        // <>
        
        // <View style={styles1.footer}>
        //     <Image source={require('../images/home.png')} style={styles1.image2} />
        // </View>
        // </>
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'black',
                    opacity: 0.3
                }
            }}
        >
            <Tab.Screen name="Dashboard" component={DashboardPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../images/home.png')} style={{width: 30, height: 30}}/>
                    ),
                    headerShown: false,
                    title: 'Home',
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'white',
                    }
                }}
            />
            <Tab.Screen name="Describe" component={DescribePage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../images/home.png')} style={{width: 30, height: 30}}/>
                    ),
                    headerShown: false,
                    title: 'Describe',
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'white',
                    }
                }}
            />
            <Tab.Screen name="Reg-form" component={RegisterPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../images/home.png')} style={{width: 30, height: 30}}/>
                    ),
                    headerShown: false,
                    title: 'Register',
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'white',
                    }
                }}
            />

        </Tab.Navigator>
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

export default TabNavigation;