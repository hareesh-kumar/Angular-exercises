import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  public number: number;
  public wallet = {};
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.wallet = this._http.getwallet();
  }

  buy() {
    this._http.buy(this.number);
    this.number = 0;
  }

}
