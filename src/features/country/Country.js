import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries:null,
  country:null
}

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    updateCountries: (state,action) => {
      state.countries = action.payload;
    },
    getCountry:(state,action)=>{
      state.country = action.payload
    }
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { updateCountries,getCountry } = countrySlice.actions;

export const callCountries = (state) => state.country.countries;
export const callCountry = (state) => state.country.country;

export default countrySlice.reducer;

