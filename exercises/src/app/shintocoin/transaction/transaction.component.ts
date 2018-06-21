import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  public transactions = {};
  public id: string;
  objectKeys = Object.keys;
  constructor(private _route: ActivatedRoute,
    private _router: Router, private _http: HttpService) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.id = params['id']);
    this.transactions = this._http.getledger();
  }
}
