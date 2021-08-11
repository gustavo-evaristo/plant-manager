import React from 'react';
import { Welcome, UserIdentification, Confirmation } from './src/scenes';

import { Routes } from './src/routes'

import AppLoading from 'expo-app-loading';

import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';

const App: React.FC = () => {

  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if(!fontsLoaded)
    return <AppLoading />

  return (
    <Routes />
  );
}
export default App;
