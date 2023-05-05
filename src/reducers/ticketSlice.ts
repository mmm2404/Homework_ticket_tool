import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  { useSelector } from "react-redux";
import { Ticket } from "../api/datatype";
import { RootState } from "../provider/provider.types";
import { ticketApi } from "../api/ticketAPI";
import {TicketsState, loadingState, page } from "../components/ticketcard/ticket.types";




 export const fetchTickets = createAsyncThunk(
    "tickets/fetch",
    async (page: number) => {
        const data = await ticketApi.getTickets({ page });
        return data;
    }
 );


  
  const initialState: TicketsState = {
    ticketList: [],
    status: 'idle',
    error: null,
    start:0,
    end:3,

  };
  
 export const ticketSlice = createSlice<{ticketList:Ticket[], status:loadingState['status'],error:loadingState['error'],start:page['start'], end:page['end']} , Record<string, never>>
 ({
    name:"tickets",
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTickets.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchTickets.fulfilled, (state, action) =>{
            state.status = "succeeded"
            state.ticketList = action.payload
        });
       builder.addCase(fetchTickets.rejected, (state) =>{
        state.status = 'failed';
        state.error = 'Something went wrong';
       })
    },
       
 });
 // eslint-disable-next-line react-hooks/rules-of-hooks
 export const getCompanyList = () => useSelector(
   (state: RootState) =>
     new Set(state.tickets.ticketList.map((ticket) => ticket.company))
 );
