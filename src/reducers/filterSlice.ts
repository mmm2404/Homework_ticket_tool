import {createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Ticket } from "../api/datatype";
import { RootState } from "../provider/provider.types";



interface Filter {
    type: string;
    filterCb: (tickets: Ticket[]) => Ticket[];
  }
  

  export const filterAdapter = createEntityAdapter<Filter>({
    selectId: (item) => item.type,
  });
  
  export const filterSelectors = filterAdapter.getSelectors(
    (state: RootState) => state.filter
  );
  

  // eslint-disable-next-line react-hooks/rules-of-hooks
  export const getFilterList = () => useSelector(filterSelectors.selectAll);
//   export const getFilterList = () => filterSelectors.selectAll(store.getState());
  
  export const filterSlice = createSlice({
    name: "filter",
    initialState: filterAdapter.getInitialState(),
    reducers: {
      setFilter: (state, action: PayloadAction<Filter>) => {
        filterAdapter.setOne(state, action.payload);
      },
      removeFilter: (state, action: PayloadAction<string>) => {
        filterAdapter.removeOne(state, action.payload);
      },
    },
  });
  
  export const { setFilter, removeFilter } = filterSlice.actions;