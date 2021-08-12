import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './stack.routes';

export const Routes: React.FC = () => (
  <NavigationContainer>
    <StatusBar hidden />
    <AppRoutes />
  </NavigationContainer>
);
