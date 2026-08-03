import React from 'react';
import LoginOptions from '../components/LoginOptions';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import BackButton from '../components/BackButton';

const RegisterPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar} />
      <BackButton />

      <View style={styles.content}>
        <Text style={styles.title}>Cadastre-se</Text>
        <Text style={styles.subtitle}>informe seu E-mail e crie uma senha</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu Email"
            placeholderTextColor="#8F9299"
            keyboardType="email-address"
            selectionColor="#8F9299"
            cursorColor="#8F9299"
          />

          <Text style={styles.label}>Crie uma senha</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#8F9299"
            secureTextEntry
            selectionColor="#8F9299"
            cursorColor="#8F9299"
          />

          <Text style={styles.label}>Repita a senha</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#8F9299"
            secureTextEntry
            selectionColor="#8F9299"
            cursorColor="#8F9299"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        <LoginOptions />
      </View>
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },

  topBar: {
    height: 30,
    backgroundColor: '#d8d8d8',
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: '600',
  },

  subtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    marginBottom: 28,
  },

  inputContainer: {
    gap: 6,
  },

  label: {
    fontSize: 12,
    fontWeight: '500',
    color: '#555',
  },

  input: {
    height: 48,
    backgroundColor: '#E6EAF5',
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#000',
  },

  buttonContainer: {
    alignItems: 'center',
    marginTop: 30,
  },

  registerButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#19C770',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  registerText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
