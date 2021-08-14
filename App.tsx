import React from 'react';
import { Routes } from './src/routes';
import AppLoading from 'expo-app-loading';
import { Provider } from 'mobx-react';
import { observableStore } from './src/store';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <Provider observableStore={observableStore}>
      <Routes />
    </Provider>
  );
};
export default App;
