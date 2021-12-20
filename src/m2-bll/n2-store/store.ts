import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import { WordsReducer } from '../n1-reducers/word-reducer';

const rootReducer = combineReducers({
  words: WordsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

// Types
export type rootReducerType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<rootReducerType> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  rootReducerType,
  unknown,
  AnyAction
>;
// @ts-ignore
window.store = store;
