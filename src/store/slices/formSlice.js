import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    userName: '',
    userAge: '',
    userPhoto: null, 
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setUserAge: (state, action) => {
      state.userAge = action.payload;
    },
    setUserPhoto: (state, action) => {
      state.userPhoto = action.payload;
    },
    resetForm: state => {
      state.userName = '';
      state.userAge = '';
      state.userPhoto = null; 
    },
  },
});

export const { setUserName, setUserAge, setUserPhoto, resetForm } = formSlice.actions;

export const selectUserName = state => state.form.userName;
export const selectUserAge = state => state.form.userAge;
export const selectUserPhoto = state => state.form.userPhoto;

export default formSlice.reducer;