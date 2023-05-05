import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ticket } from "../api/datatype";

type SortActionPayload = {
    type:string;
    field: keyof Ticket;
}
 const initialState: SortActionPayload = {
    type:"cheapest",
    field: "price",

 };

 export const sortingSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        setSortType: (
            state,
            action: PayloadAction<SortActionPayload>
        ) => {
            state.type = action.payload.type;
            state.field = action.payload.field;
        },
    },
 });

 export const {setSortType} = sortingSlice.actions;