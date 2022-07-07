import axios from 'axios';
import {
  CAR_LISTS,
  CAR_LOADING,
  CAR_NULL,
  CAR_SINGLE,
  ALL_CARS,
} from './types';

export const carsLoading = () => ({ type: CAR_LOADING });

export const carLists = (carLists) => ({
  type: CAR_LISTS,
  payload: { data: carLists },
});

export const allCars = (carLists) => ({
  type: ALL_CARS,
  payload: { data: carLists },
});

export const singleCarList = (carLists) => ({
  type: CAR_SINGLE,
  payload: { data: carLists },
});

export const carsNull = (carLists) => ({
  type: CAR_NULL,
  payload: carLists,
});

export const getCars = (tipeParams) => async (dispatch) => {
  try {
    dispatch(carsLoading());
    const res = await axios.get(
      'https://rent-cars-api.herokuapp.com/admin/car'
    );
    // console.log(res.data.filter((car) => car.status === tipeParams));
    dispatch(carLists(res.data.filter((car) => car.status === tipeParams)));
  } catch (error) {
    console.log(error);
  }
};

export const getAllCars = () => async (dispatch) => {
  try {
    dispatch(carsLoading());
    const res = await axios.get(
      'https://rent-cars-api.herokuapp.com/admin/car'
    );
    console.log(res.data);
    dispatch(allCars(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const getCarsDetail = (params) => async (dispatch) => {
  try {
    dispatch(carsLoading());
    const res = await axios.get(
      `https://rent-cars-api.herokuapp.com/admin/car/${params}`
    );
    // console.log(res.data);
    dispatch(singleCarList(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const getCarsNull = () => (dispatch) => {
  dispatch(carsLoading());
  dispatch(carsNull(null));
};
