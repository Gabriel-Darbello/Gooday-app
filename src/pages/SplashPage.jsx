import { StyleSheet, Image, View } from 'react-native';
import React from 'react';

const SplashPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar} />

      <View style={styles.content}>
        <Image
          source={require('../assets/logotipo.png')}
          resizeMode="contain"
        />
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
