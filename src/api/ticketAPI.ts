import { ticketData } from "./mockdata";
import { Ticket } from "./datatype";




interface GetTicketOptions {
    page: number;
    }


 
class TicketApi {


    public async getTickets(option: GetTicketOptions): Promise<Ticket[]> {
      return new Promise((res) => {
        
        res(ticketData.slice());
      });
    }
  }
  
  export const ticketApi = new TicketApi();
