import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../assets/casual_dog.png')}
      />
      <Text style={styles.title}>Ótimo dia!</Text>
      <Text style={styles.subtitle}>Como deseja acessar?</Text>

      <TouchableOpacity style={styles.accessButton}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../assets/Google.png')}
            style={styles.googleLogo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.textAccessButton}>Como deseja acessar?</Text>

        <View style={styles.iconSpacer} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionsButton}>
        <Text style={styles.textOptionsButton}>Outras opções</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: '40%',
    width: '90%',
  },

  title: {
    marginTop: 8,
    fontSize: 32,
    fontWeight: '600',
  },

  subtitle: {
    marginTop: 8,
    fontSize: 12,
  },

  accessButton: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 45,
    backgroundColor: '#19c770',
    borderRadius: 5,
  },

  iconContainer: {
    width: 30,
    height: 30,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
  },

  googleLogo: {
    width: 24,
    height: 24,
  },

  textAccessButton: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: 10,
  },

  optionsButton: {
    width: '90%',
    height: 44,
    borderWidth: 1,
    borderColor: '#19c770',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },

  textOptionsButton: {
    fontSize: 12,
  },
  iconSpacer: {
    width: 38,
  },
});
