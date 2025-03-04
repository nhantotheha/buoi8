import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppContext } from '../context/AppContext';

const ProfileScreen = () => {
  const { updateLoginState } = useAppContext();

  const handleSignOut = () => {
    updateLoginState(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.profileContainer}>
        <Text style={styles.name}>Hung Ngyen</Text>
        <Text style={styles.description}>
          I have above 5 years experience in native mobile apps React Native I am learning
        </Text>
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 150,
    backgroundColor: '#00BFFF',
  },
  profileContainer: {
    flex: 1,
    padding: 20,
    marginTop: -50,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  signOutButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;