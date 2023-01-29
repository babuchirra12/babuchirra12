import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {getPosts } from '../action/action'
const initialState = {
  entities: [],
  loading: false,
}
export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.entities = payload
    },
    [getPosts.rejected]: (state) => {
      state.loading = false
    },
  },
})

export default postSlice.reducer;













// import {createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios';

// export const fetchData= createAsyncThunk('getData',
// async() =>{
//     return fetch(' http://localhost:3000/posts')
//     .then(res=> res.json());
    
//     // const API_BASE = `${process.env.REACT_APP_MOCK_API_FETCHTODOBYID ? process.env.REACT_APP_MOCK_API_BASE : process.env.REACT_APP_BASE}`
//     // const responce = await axios.get(`${API_BASE}/getData`)
//     // return responce.data;
// })

// const postSlice= createSlice({
//     name:'getData',
//     initialState:{
//         post:[],
//         loading:false,
//         error:null
//     },
//     extraReducers:{
//         [fetchData.pending]:(state, action) =>{
//             state.loading=true;
//         },
//         [fetchData.fulfilled]:(state, action) =>{
//             state.loading=false;
//             state.post=[action.payload];
//         },
//         [fetchData.rejected]:(state, action) =>{
//             state.loading=false;
//             state.error = action.payload;
//         },
//     },
// });

// export default postSlice.reducer 