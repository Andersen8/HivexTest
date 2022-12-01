import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';
import { setLocalStorage } from '../utils/localStorage';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
store.subscribe(()=>{
	setLocalStorage("store", store.getState().rootReducer)
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;