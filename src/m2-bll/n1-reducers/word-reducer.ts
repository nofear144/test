import { WordResponseType, wordsAPI } from '../../m3-dal/api-words';
import { AppThunk } from '../n2-store/store';

const initialState = {
  words: [] as WordResponseType[],
  status: 'idle' as StatusType,
  error: '',
};

export const WordsReducer = (
  state: initialStateType = initialState,
  action: CombineActionType,
): initialStateType => {
  switch (action.type) {
    case 'SET_WORDS': {
      return { ...state, words: [...action.payload] };
    }
    case 'SET-ERROR':
    case 'SET_STATUS': {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

// Actions

export const setStatusAC = (status: StatusType) =>
  ({
    type: 'SET_STATUS',
    payload: { status },
  } as const);
export const setWordAC = (wordsData: WordResponseType[]) =>
  ({
    type: 'SET_WORDS',
    payload: wordsData,
  } as const);
export const setErrorAC = (error: string) =>
  ({ type: 'SET-ERROR', payload: { error } } as const);

// Thunk
export const getWordsTC =
  (word: string): AppThunk =>
  dispatch => {
    dispatch(setStatusAC('loading'));
    wordsAPI
      .getWord(word)
      .then(res => {
        dispatch(setWordAC(res.data));
        dispatch(setStatusAC('succeeded'));
      })
      .catch(e => {
        dispatch(setErrorAC(e.response.data.message));
        dispatch(setStatusAC('failed'));
      })
      .finally(() => {
        dispatch(setStatusAC('idle'));
      });
  };

// Types
type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
type initialStateType = typeof initialState;
type CombineActionType =
  | ReturnType<typeof setWordAC>
  | ReturnType<typeof setStatusAC>
  | ReturnType<typeof setErrorAC>;
