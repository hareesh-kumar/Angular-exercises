import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public transactions = {} ;
  public wallet = {
    coins: 0,
    value: 1
  };
  public coins = 0;
  public value = 1;
  constructor(private _http: HttpClient ) { }

  getWeather(url: string) {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + url + '&appid=bf5f2a401bdaf5712d5f597797ac223e');
  }
  getwallet() {
    return this.wallet;
  }

  getledger() {
    return this.transactions;
  }

  mine() {
    let randomidx = Math.floor(Math.random() * 9999) + 1 ;
    while ( this.transactions[randomidx]) {
      randomidx = Math.floor(Math.random() * 9999) + 1;
    }
    this.wallet.coins += Number('1');
    console.log(this.wallet);
    this.transactions[randomidx] =  ['Mined' , 1 , this.wallet.coins];
  }

  buy(num: number) {
    let randomidx = Math.floor(Math.random() * 9999) + 1;
    while (this.transactions[randomidx]) {
      randomidx = Math.floor(Math.random() * 9999) + 1;
    }
    this.wallet.value += 1;
    this.wallet.coins += Number(num);
    this.transactions[randomidx] = ['Bought', Number(num), this.wallet.coins];
  }

  sell(num) {
    let randomidx = Math.floor(Math.random() * 9999) + 1;
    while (this.transactions[randomidx]) {
      randomidx = Math.floor(Math.random() * 9999) + 1;
    }
    if (this.wallet.value > 0) {
      this.wallet.value -= 1 ;
    }
    this.wallet.coins -= Number(num);
    if (this.wallet.coins < 0) {
      this.wallet.coins = 0;
    }
    this.transactions[randomidx] = ['Sold', Number(num), this.wallet.coins];
  }
}
