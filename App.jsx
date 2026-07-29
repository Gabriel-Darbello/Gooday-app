import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashPage from './src/pages/SplashPage';

export default function App() {
  return (
    <SplashPage />
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
