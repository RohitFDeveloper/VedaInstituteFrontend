import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use local storage as the storage engine

// Import your reducers
import rootReducer from './reducers/index';

// Configure the persist options
const persistConfig = {
    key: 'root',
    storage
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
