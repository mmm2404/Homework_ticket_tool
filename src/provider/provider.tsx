import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { PropsWithChildren } from "react";
import { ticketSlice } from "../reducers/ticketSlice";
import { sortingSlice } from "../reducers/sortingSlice";
import { filterSlice } from "../reducers/filterSlice";
import { pageSlice } from "../reducers/pageSlice";

// eslint-disable-next-line react-refresh/only-export-components
export const store = configureStore({
    reducer:{
        tickets: ticketSlice.reducer,
        sort: sortingSlice.reducer,
        filter: filterSlice.reducer,
        page: pageSlice.reducer,
    },
    middleware: (def) =>
    def({
      serializableCheck: false,
    }),
});

function AppProvider({children}:PropsWithChildren){
    return(
       <Provider store={store}>{children}</Provider>
    )
}

export default AppProvider;