import { Ticket } from "./datatype";

export const ticketData: Ticket[] = [
    {
      id: 1,
      from: "SVO",
      to: "LED",
      company: "S7 Airlines",
      price: 12900,
      currency: "RUB",
      date: "20-02-2022",
      duration: {
        hours: 15,
        minutes:0,
      },
      time: {
        startTime: "04:00",
        endTime: "12:00",
      },
      transfersCount: 2,
    },
    {
      id: 2,
      from: "SVO",
      to: "LED",
      company: "Pobeda Airlines",
      price: 29780,
      currency: "RUB",
      date: "20-02-2022",
      duration: {
        hours: 2,
        minutes:0,
      },
      time: {
        startTime: "04:30",
        endTime: "06:30",
      },
      transfersCount: null,
    },
    {
      id: 3,
      from: "SVO",
      to: "LED",
      company: "Pobeda Airlines",
      price: 10500,
      currency: "RUB",
      date: "20-02-2022",
      duration: {
        hours: 4,
        minutes:8,
      },
      time: {
        startTime: "04:50",
        endTime: "08:55",
      },
      transfersCount: 1,
    },
    {
      id: 4,
      from: "SVO",
      to: "LED",
      company: "Red Wings",
      price: 18575,
      currency: "RUB",
      date: "20-02-2022",
      duration: {
        hours: 12,
        minutes:30,
      },
      time: {
        startTime: "10:30",
        endTime: "22:50",
      },
      transfersCount: 2,
    },
    {
      id: 5,
      from: "SVO",
      to: "LED",
      company: "S7 Airlines",
      price: 16549,
      currency: "RUB",
      date: "20-02-2022",
      duration: {
        hours: 2,
        minutes:0,
      },
      time: {
        startTime: "18:50",
        endTime: "20:50",
      },
      transfersCount: 0,
    },
    {
        id: 6,
        from: "SVO",
        to: "LED",
        company: "Red Wings",
        price: 19800,
        currency: "RUB",
        date: "20-02-2022",
        duration: {
            hours: 14,
            minutes:0,
          },
        time: {
          startTime: "10:30",
          endTime: "22:50",
        },
        transfersCount: 2,
      },
      {
        id: 7,
        from: "SVO",
        to: "LED",
        company: "S7 Airlines",
        price: 15000,
        currency: "RUB",
        date: "20-02-2022",
        duration: {
            hours: 13,
            minutes:0,
          },
        time: {
          startTime: "06:00",
          endTime: "12:00",
        },
        transfersCount: 2,
      },
      {
        id: 8,
        from: "SVO",
        to: "LED",
        company: "Pobeda Airlines",
        price: 10500,
        currency: "RUB",
        date: "20-02-2022",
        duration: {
          hours: 9,
          minutes:0,
        },
        time: {
          startTime: "06:50",
          endTime: "09:55",
        },
        transfersCount: 1,
      },
      {
        id: 9,
        from: "SVO",
        to: "LED",
        company: "Red Wings",
        price: 5500,
        currency: "RUB",
        date: "20-02-2022",
        duration: {
          hours: 14,
          minutes:10,
        },
        time: {
          startTime: "04:50",
          endTime: "18:55",
        },
        transfersCount: 3,
      }
      
  ];
  