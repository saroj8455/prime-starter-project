import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  baseURL = 'https://jsdevblog.in/dev/welcome/';
  // read_all

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.http.get(this.baseURL + 'read_all').subscribe((resp) => {
    //   console.log(resp);
    // });
  }
}
