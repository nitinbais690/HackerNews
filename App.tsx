import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopStories from 'screens/TopStories';

function App() {
  return (
    <SafeAreaProvider>
      <TopStories />
    </SafeAreaProvider>
  );
}

export default App;
