import { initDatabase } from '@/database/sqlite-setup';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { Text as RNText } from 'react-native';
import Dashboard from './dashboard';
import SplashScreen from './splashScreen';

export default function Index() {
  const [fontsLoaded] = useFonts({
    'Karla-Regular': require('@assets/fonts/Karla-Regular.ttf'),
    'Karla-Bold': require('@assets/fonts/Karla-Bold.ttf'),
    'Karla_ExtraBold': require('@assets/fonts/Karla-ExtraBold.ttf'),
  });

  const [showSplash, setShowSplash] = useState(true);

  // Type-safe way to set default font globally
  if (fontsLoaded) {
    (RNText as any).defaultProps = (RNText as any).defaultProps || {};
    (RNText as any).defaultProps.style = { fontFamily: 'Karla-Regular' };
  }

  // Initialize database
  useEffect(() => {
    initDatabase()
    .then(() => {
      console.log('Database initialized');
    })
    .catch((error) => {
      console.error('Error initializing database:', error);
    });
  }, []);


  useEffect(() => {
    if (fontsLoaded) {
      // Wait 3 seconds then show dashboard
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || showSplash) {
    return <SplashScreen />;
  }

  return <Dashboard />;
}
