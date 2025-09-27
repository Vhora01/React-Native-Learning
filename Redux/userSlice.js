
import { createSlice } from "@reduxjs/toolkit";


const userrrrrrrrrSlice = createSlice({
    name:'user123',
    initialState:{
        user:null
    },
    reducers:{
        setUser : (state,action) => {
            console.log('state=====',state);
            console.log('action=====',action);
            state.user = action.payload
        }
    }
});


export const {setUser} = userrrrrrrrrSlice.actions
export default userrrrrrrrrSlice.reducer