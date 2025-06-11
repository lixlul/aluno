import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, handleLogin  } from 'react-native';
import styles from '../scr/styles/AboutScreenStyles';

function AboutScreen() {
  return (
    <View style={styles.container}>
     <Text style={styles.header}>Meu Aplicativo</Text>
     <Text style={styles.Text}>Versão 1.0.0</Text>
     <Text style={styles.Text}>Desenvolvido por: Ana Hathaway</Text>
     <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Visite nosso site</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entre em contato por email</Text>
      </TouchableOpacity>

      <Text style={styles.luiza}>© 2025 Ana Hathaway. Todos os direitos reservados.</Text>
    </View>
    
  );
}


export default AboutScreen;