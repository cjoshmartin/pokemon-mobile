import { Assets as NavigationAssets } from '@react-navigation/elements';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { useColorScheme } from 'react-native';
import { Navigation } from './navigation';
import * as Linking from 'expo-linking';

Asset.loadAsync([
  ...NavigationAssets,
  require('./assets/newspaper.png'),
  require('./assets/bell.png'),
]);

SplashScreen.preventAutoHideAsync();


const prefix = Linking.createURL('/');

export function App() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme

  return (
    <Navigation
      theme={theme}
      linking={{
        enabled: 'auto',
        prefixes: [
          // Change the scheme to match your app's scheme defined in app.json
          prefix,
          'pokemon://',
          'http://pokemon-web-chi.vercel.app',
          'https://pokemon-web-chi.vercel.app',
          'https://pokemon-web-chi.vercel.app/pokemon/*',
          'http://pokemon-web-chi.vercel.app/pokemon/*',
        ],
      }}
      onReady={() => {
        SplashScreen.hideAsync();
      }}
    />
  );
}
