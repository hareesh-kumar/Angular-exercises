import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css', '../../bootstrap.min.css']
})
export class LedgerComponent implements OnInit {
  public transactions = {};
  objectKeys = Object.keys;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.transactions = this._http.getledger();
  }
}
