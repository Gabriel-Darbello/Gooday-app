import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.arrowText}>←</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    padding: 8,
    marginLeft: -8,
  },
  arrowText: {
    fontSize: 48,
    fontWeight: '300',
    color: '#19c770',
    lineHeight: 34,
  }
});
