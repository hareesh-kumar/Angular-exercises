import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  public answer: any;
  constructor(private _http: HttpService ) { }

  ngOnInit() {
    this.answer = 0 ;
  }

  mine() {
    if (this.answer == 13) {
      console.log(this.answer);
      this._http.mine();
    }
    this.answer = 0;
  }

}
