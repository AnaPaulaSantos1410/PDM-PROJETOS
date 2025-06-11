import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

export default function AboutScreen() {
  const openWebsite = () => {
    Linking.openURL('');
  };

  const contactUs = () => {
    Linking.openURL('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sobre o App</Text>

      <Text style={styles.label}>Versão: 1.0.0</Text>
      <Text style={styles.label}>Desenvolvido por: Ana Santos </Text>

      <TouchableOpacity style={styles.button} onPress={openWebsite}>
        <Text style={styles.buttonText}>Visite o Site</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={contactUs}>
        <Text style={styles.buttonText}>Entre em Contato</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}> © 2025 Todos os direitos reservados.</Text>
      </View>

      <View style={styles.navBar}>
        <Text style={styles.navItem}>Home</Text>
        <Text style={styles.navItem}>Settings</Text>
        <Text style={styles.navItemActive}>Sair</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3e1213',
      paddingTop: 40,
      paddingHorizontal: 20,
      justifyContent: 'space-between'
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'white',
      textAlign: 'center'
    },
    label: {
      fontSize: 16,
      marginBottom: 10,
      color: 'white',
      textAlign: 'center'
    },
    button: {
      backgroundColor: 'white',
      padding: 12,
      borderRadius: 8,
      marginVertical: 10,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ddd'
    },
    buttonText: {
      color: '#3e1213',
      fontSize: 16,
      fontWeight: 'bold'
    },
    footer: {
      marginTop: 30,
      alignItems: 'center'
    },
    footerText: {
      fontSize: 12,
      color: '#ddd'
    },
    navBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 12,
      borderTopWidth: 1,
      borderColor: '#ddd',
      backgroundColor: 'white'
    },
    navItem: {
      color: '#555'
    },
    navItemActive: {
      color: '#3e1213',
      fontWeight: 'bold'
    }
  });
  