import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-seattle-weather',
  templateUrl: './seattle-weather.component.html',
  styleUrls: ['./seattle-weather.component.css']
})
export class SeattleWeatherComponent implements OnInit {
  public weather: any;
  public givenurl: any;
  constructor(private _route: ActivatedRoute,
    private _router: Router, private _httpService: HttpService ) { }

  ngOnInit() {
    this.weather =  {
      'main' : {},
      'weather' : [{}]
    };
    this._route.url.subscribe( data => this.givenurl = data);
    this._httpService.getWeather(this.givenurl[0].path).subscribe(data => {
      this.weather = data;
      console.log(this.weather);
    });
  }

}
