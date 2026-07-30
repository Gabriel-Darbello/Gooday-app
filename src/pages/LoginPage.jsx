import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LoginOptions from '../components/LoginOptions';

const LoginPage = () => {
  const [remember, setRemember] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topBar} />

      <View style={styles.content}>
        <Text style={styles.title}>Acesse</Text>
        <Text style={styles.subtitle}>com Email e senha</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu Email"
            placeholderTextColor="#8F9299"
            keyboardType="email-address"
            selectionColor="#8F9299"
            cursorColor="#8F9299"
          />

          <Text style={styles.label}>Senha</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#8F9299"
            secureTextEntry
            selectionColor="#8F9299"
            cursorColor="#8F9299"
          />
        </View>

        <View style={styles.optionsRow}>
          <View style={styles.rememberContainer}>
            <Checkbox
              value={remember}
              onValueChange={setRemember}
              tintColors={{
                true: '#19C770',
                false: '#8F9299',
              }}
            />

            <Text style={styles.optionText}>Lembrar senha</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>
              Esqueci minha senha
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        <LoginOptions />
      </View>
    </View>
  );
};

export default LoginPage;

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

  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  optionText: {
    fontSize: 12,
    color: '#555',
    marginLeft: 6,
  },

  forgotPassword: {
    fontSize: 12,
    color: '#000',
  },

  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  loginButton: {
    width: '48%',
    height: 45,
    backgroundColor: '#19C770',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },

  registerButton: {
    width: '48%',
    height: 45,
    borderWidth: 1,
    borderColor: '#19C770',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  registerText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
});
