import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const reactotronConfig = {
  initiate: () => {
    Reactotron.configure().useReactNative().use(reactotronRedux()).connect();
  },
  createEnhancer: () => Reactotron.createEnhancer(),
};

console.tron = Reactotron;

export default reactotronConfig;
