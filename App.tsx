import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoadingPage from './src/screen/loadingPage';
import StartPage from './src/screen/startPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardPage from './src/screen/dashboardPage';
import Header from './src/component/header';
import TabNavigation from './src/component/TabNavigation';



export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Loading" component={LoadingPage} options={{headerShown: false}}/>
        <Stack.Screen name="Start" component={StartPage}options={{headerShown: false}} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={{
          header: () => <Header/>
        }} />
      </Stack.Navigator>
    </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
