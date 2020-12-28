// import {createStore, applyMiddleware, compose} from 'redux';
// import Reactotron from '../utils/ReactotronConfig';
// import model from './model';

// // create the store
// export default (rootReducer) => {
//   const config = {
//     useFixtures: false,
//     ezLogin: false,
//     yellowBox: __DEV__,
//     reduxLogging: __DEV__,
//     includeExamples: __DEV__,
//     useReactotron: true,
//   };
//   const store = createStore(rootReducer, Reactotron.createEnhancer(config));

//   return store;
// };

import {createStore} from 'easy-peasy';
import model from './model';

let storeEnhancers = [];

if (__DEV__) {
  const reactotron = require('../utils/ReactotronConfig').default;
  reactotron.initiate();
  storeEnhancers = [...storeEnhancers, reactotron.createEnhancer()];
}

const store = createStore(model, {
  enhancers: [...storeEnhancers],
});

export default store;
