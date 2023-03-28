import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
 
  private appId: string;
  private appCode: string;

  public weather: any;

  public constructor(private http: HttpClient) {
        this.appId = "APP-ID-HERE";
        this.appCode = "APP-CODE-HERE";
        this.weather = [];
    }

    public ngOnInit() { }

    public getWeather(coordinates: any) {}

}



