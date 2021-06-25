import { configureStore } from '@reduxjs/toolkit';
import countryReducer from '../features/country/Country';

export const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});
