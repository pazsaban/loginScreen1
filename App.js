import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

if (__DEV__) {
  import('./src/utils/ReactotronConfig').then((e) =>
    console.log('Reactotron Configured')
  );
}

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          {/* //{<StatusBar barStyle="light-content" />} */}
          <AppNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;
