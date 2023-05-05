

import { getFilterList } from "../../reducers/filterSlice";
import { fetchTickets } from "../../reducers/ticketSlice";
import TicketCard from "../ticketcard/TicketCard";
import { useAppDispatch, useAppSelector } from "../../provider/provider.types";
import style from "./ticketlist.module.css";
import {useEffect, useState } from "react";
import { setPage } from "../../reducers/pageSlice";
import { ticketData } from "../../api/mockdata";



function TicketList() {
  const dispatch = useAppDispatch();
  const currentPageStart = useAppSelector((state) => state.page.start);
  const currentPageEnd = useAppSelector((state) => state.page.end);
  const tickets = useAppSelector((state) => state.tickets.ticketList);
  const sortField = useAppSelector((state) => state.sort.field);
  const error = useAppSelector((state) => state.tickets.error)
  const status = useAppSelector((state) => state.tickets.status)
  const filters = getFilterList();




    useEffect (() =>{
      if(status === "idle"){
         dispatch(fetchTickets(1));
         
      }
  },[dispatch, status])


  let content;
  if(status === "loading"){
    content = <p>"Loading..."</p>;

  }else if (status === "succeeded"){

    const filteredData = filters.reduce((res, cb) => cb.filterCb(res), tickets);
    const sortedData = [...filteredData].sort((a, b) => (a[sortField] as number) - (b[sortField] as number));

    content = sortedData?.slice(currentPageStart, currentPageEnd).map((ticket) => (
      <TicketCard key={ticket.id} ticket={ticket} />))

  }else if(status === "failed"){
    content = <p>{error}</p>;
  }
    
  const [active, setActive] = useState<boolean>(true)

    const handleNextPage= (start:number, end:number) =>{

    dispatch(setPage({start, end}));
      if(end === 9){
      setActive(!active)
      
      }
    
      }
      function refreshPage() {
        window.location.reload();
      }
  return (
  <>
   <div className={style.list}>
   {content}
 {active? (<button type="button" onClick={(e) => handleNextPage(currentPageStart,currentPageEnd)}
        className={style.btn}>Загрузить еще билеты</button>) :
         (<button type="button" onClick={refreshPage}
         className={style.btn}>Давай заново поищем</button>)}
    
  </div>
    
  </>
   
  );
}
  export default TicketList;
