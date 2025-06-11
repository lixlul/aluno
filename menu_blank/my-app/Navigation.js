import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';
import AboutScreen from './screens/AboutScreen';


const Drawer = createDrawerNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Sair">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Sair" component={LoginScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
         <Drawer.Screen name="Cards" component={CardsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
