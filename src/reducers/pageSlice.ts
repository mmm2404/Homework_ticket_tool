import { PayloadAction, createSlice } from "@reduxjs/toolkit";



type PageActionPayload = {
    start:number;
    end: number;
}
 const initialState: PageActionPayload = {
    start:0,
    end: 3,

 };

 export const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        setPage: (
            state,
            action: PayloadAction<PageActionPayload>
        ) => 
         {
            state.start = action.payload.start += 3;
            state.end = action.payload.end += 3;
           
        },
        
        
    },
 });

 export const { setPage } = pageSlice.actions;