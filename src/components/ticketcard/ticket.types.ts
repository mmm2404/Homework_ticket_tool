import { Ticket } from "../../api/datatype";

export interface TicketCardProps{
    ticket: Ticket;
 }

 export type loadingState = {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  };
 export type page = {
  start: number,
  end: number,
 }
  export type TicketsState = {
    ticketList: Ticket[];
    status: loadingState['status'];
    error: loadingState['error'];
    start:page['start'];
    end: page['end'];
  }