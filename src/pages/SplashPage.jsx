import { StyleSheet, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

const SplashPage = () => {
  const navigator = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigator.replace('Home');
    }, 3000);

    return () => clearTimeout(timer);

  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.topBar} />

      <View style={styles.content}>
        <Image source={require('../assets/logotipo.png')} resizeMode="contain" />
      </View>
    </View>
  );
};

export default SplashPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19c770',
  },
  topBar: {
    height: 30,
    backgroundColor: '#009859',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
