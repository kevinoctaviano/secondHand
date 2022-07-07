import {
  ALL_CARS,
  CAR_LISTS,
  CAR_LOADING,
  CAR_NULL,
  CAR_SINGLE,
} from '../actions/types';

const initialState = {
  loading: 'idle',
  data: [],
};

export default function car(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CAR_LISTS:
      return {
        ...state,
        loading: 'idle',
        data: payload.data,
      };
    case CAR_SINGLE:
      return {
        ...state,
        loading: 'idle',
        data: payload.data,
      };
    case CAR_LOADING:
      return {
        ...state,
        loading: 'loading',
      };
    case CAR_NULL:
      return {
        ...state,
        loading: 'idle',
        data: action.payload,
      };
    case ALL_CARS:
      return {
        ...state,
        loading: 'idle',
        data: payload.data,
      };
    default:
      return state;
  }
}
