import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  public number: number;
  public wallet = {};
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.wallet = this._http.getwallet();
  }

  sell() {
    this._http.sell(this.number);
    this.number = 0;
  }

}
