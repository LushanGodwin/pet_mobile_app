import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoadingPage from './src/pages/loadingPage';
import StartPage from './src/pages/startPage';

export default function App() {
  return (
     <LoadingPage/>
    // <StartPage/>
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
