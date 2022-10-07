import {createSlice,configureStore} from '@reduxjs/toolkit'

const BlogSlice=createSlice({
    name:'auth',
    initialState:{
        isloggedIn:false
    },
    reducers:{
        login:(state,action)=>{
            state.isloggedIn=true
        },
        logout:(state,action)=>{
            state.isloggedIn=false
        }
    }
})

export const store=configureStore({
    reducer:BlogSlice.reducer
})
export const{login,logout}=BlogSlice.actions