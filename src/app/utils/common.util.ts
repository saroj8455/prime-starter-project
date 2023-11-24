export const _IS_ARRAY = 'IS ARRAY';

export const baseUrl = 'http://localhost:3002';
export interface ITicket {
  title: string;
  description: string;
  category: string;
}

export interface Ticket {
  _id: string;
  title: string;
  description: string;
  category: string;
  createdAt: string;
  updatedAt?: string;
  __v: number;
}

export interface ITicketResp {
  message: string;
  count: number;
  tickets: Ticket[];
}
