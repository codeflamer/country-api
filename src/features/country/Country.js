import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries:null,
  country:null,
  queryByName:null,
  queryCond:false,
  isError:false
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
    },
    getQueryName:(state,action)=>{
      state.queryByName = action.payload
    },
    setQueryCondition:(state,action)=>{
      state.queryCond = action.payload
    },
    setIsError:(state,action)=>{
      state.isError = action.payload
    }
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { updateCountries,getCountry,getQueryName,setQueryCondition,setIsError } = countrySlice.actions;

export const callCountries = (state) => state.country.countries;
export const callCountry = (state) => state.country.country;
export const callCountriesQuery = (state) => state.country.queryByName;
export const callQueryCondition = (state) => state.country.queryCond;
export const callIsError = (state) => state.country.isError;

export default countrySlice.reducer;

