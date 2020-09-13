import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore} from 'redux-persist';
import {logger} from 'redux-logger';

export default function configureStore() {
  const store = createStore(
    reducer,
    undefined,
    compose(applyMiddleware(thunk, logger)),
  );

  const config = {
    storage: AsyncStorage,
  };

  persistStore(store, null, () => {
    // store.getState();
    console.log('restored reducers');
  });

  return store;
}
