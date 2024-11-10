import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    HelveticaNeue: require('./assets/fonts/HelveticaNeueRoman.otf'),
    'HelveticaNeue-Bold': require('./assets/fonts/HelveticaNeueBold.otf'),
    'HelveticaNeue-Light': require('./assets/fonts/HelveticaNeueLight.otf'),
    'HelveticaNeue-Medium': require('./assets/fonts/HelveticaNeueMedium.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
