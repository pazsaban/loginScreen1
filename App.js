if (__DEV__) {
  import('./src/utils/ReactotronConfig').then((e) =>
    console.log('Reactotron Configured')
  );
}
import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/redux/';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize'; // Use for caching/memoize for better performance

import {
  I18nManager,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Icon.loadFont();
// console.disableYellowBox = true;

// const translationGetters = {
//   // lazy requires (metro bundler does not support symlinks)
//   en: () => require('./src/translations/en.json'),
//   he: () => require('./src/translations/fr.json'),
// };

// const translate = memoize(
//   (key, config) => i18n.t(key, config),
//   (key, config) => (config ? key + JSON.stringify(config) : key)
// );

// const setI18nConfig = () => {
//   // fallback if no available language fits
//   const fallback = {languageTag: 'en', isRTL: false};

//   const {languageTag, isRTL} =
//     RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
//     fallback;

//   // clear translation cache
//   translate.cache.clear();
//   // update layout direction
//   I18nManager.forceRTL(isRTL);
//   // set i18n-js config
//   i18n.translations = {[languageTag]: translationGetters[languageTag]()};
//   i18n.locale = languageTag;
// };

const App = () => {
  return (
    <>
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            {/* //{<StatusBar barStyle="light-content" />} */}
            <AppNavigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </>
  );
};

export default App;

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     setI18nConfig(); // set initial config
//   }

//   componentDidMount() {
//     RNLocalize.addEventListener('change', this.handleLocalizationChange);
//   }

//   componentWillUnmount() {
//     RNLocalize.removeEventListener('change', this.handleLocalizationChange);
//   }

//   handleLocalizationChange = () => {
//     setI18nConfig();
//     this.forceUpdate();
//   };

//   render() {
//     return (
//       <SafeAreaView style={styles.safeArea}>
//         <Text style={styles.value}>{translate('hello')}</Text>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     backgroundColor: 'white',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   value: {
//     fontSize: 18,
//   },
// });
