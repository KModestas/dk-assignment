import { createStore } from 'redux';
import rootReducer from './reducers'; // will look for index.js by default

const store = createStore(rootReducer);

export default store;

// this is where the global state is created. It is connected to the reducers by taking the combinedreducer as the first argument. All data on the app will be stored on this global store.
