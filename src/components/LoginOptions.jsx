import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const LoginOptions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.text}>Ou continue com</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../assets/Google.png')}
            resizeMode="contain"
            style={styles.image}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../assets/Facebook.png')}
            resizeMode="contain"
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginOptions;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
  },

  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#D8D8D8',
  },

  text: {
    marginHorizontal: 10,
    color: '#8F9299',
    fontSize: 12,
  },

  buttonsContainer: {
    flexDirection: 'row',
    gap: 36,
  },

  socialButton: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 56,
    height: 56,
  },
});
