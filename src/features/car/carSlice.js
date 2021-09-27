import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cars: ['Model S', 'Model X', 'Model 3', 'Model y'],
};

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {},
});

export const seleteCar = (state) => state.car.cars;
export default carSlice.reducer;
