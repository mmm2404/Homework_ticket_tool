export interface TicketTime {
    startTime: string;
    endTime: string;
}
 export interface FlightDuration {
    hours: number;
    minutes: number;
 }
export interface Ticket {
    id: number;
    from: string;
    to: string;
    company: string;
    price: number;
    currency: 'RUB';
    time: TicketTime;
    duration: FlightDuration;
    date: string;
    transfersCount: number | null;
}

