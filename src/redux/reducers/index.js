import {combineReducers} from 'redux';
import storage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';
import UserReducer from './UserReducer';

const favoritesReducerConfig = {
  key: 'UserReducer',
  // blacklist: ['contacts'],
  storage,
};

const reducers = {
  UserReducer: persistReducer(favoritesReducerConfig, UserReducer),
};

const appReducer = combineReducers(reducers);
export default appReducer;
