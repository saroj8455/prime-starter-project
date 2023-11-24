import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  ITicket,
  ITicketResp,
  Ticket,
  baseUrl,
} from 'src/app/utils/common.util';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  ticket: ITicket = {
    title: '',
    category: '',
    description: '',
  };

  ticketsArray: Ticket[] = [];
  ticketCount = 0;

  constructor(private _http: HttpClient) {}
  ngOnInit(): void {
    this._http.get<ITicketResp>(baseUrl + '/api/tickets').subscribe((resp) => {
      this.ticketsArray = resp.tickets;
      this.ticketCount = resp.count;
    });
  }
  createTicket() {
    this._http.post(baseUrl + '/api/tickets', this.ticket).subscribe((resp) => {
      console.log(resp);
    });
  }
}
