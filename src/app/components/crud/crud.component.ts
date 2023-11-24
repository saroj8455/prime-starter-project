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
  visible: boolean = false;
  selectedTickedId!: string;

  constructor(private _http: HttpClient) {}
  ngOnInit(): void {
    this._http.get<ITicketResp>(baseUrl).subscribe((resp) => {
      this.ticketsArray = resp.tickets;
      this.ticketCount = resp.count;
    });
  }
  createTicket() {
    this._http.post(baseUrl, this.ticket).subscribe((resp) => {
      console.log(resp);
    });
  }
  deleteTicket(ticket: Ticket) {
    console.log(ticket._id);
    this._http.delete(baseUrl + '?Id=' + ticket._id).subscribe((resp) => {
      console.log(resp);
    });
  }
  editTicket(ticket: Ticket) {
    this.visible = !this.visible;
    this.selectedTickedId = ticket._id;
    this.ticket.title = ticket.title;
    this.ticket.category = ticket.category;
    this.ticket.description = ticket.description;
  }
  updateTicket() {
    this._http
      .put(baseUrl + '?Id=' + this.selectedTickedId, this.ticket)
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
