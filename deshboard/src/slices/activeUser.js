import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,
}

export const activeUser = createSlice({
  name: 'activeUser',
  initialState,
  reducers: {
    active: (state,action) => {
        state.value=action.payload
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { active } = activeUser.actions

export default activeUser.reducer