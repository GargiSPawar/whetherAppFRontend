import { Component, OnInit } from '@angular/core';
import { WheatherApiService } from '../wheather-api.service'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public wheatherData;
  public forecast;
  constructor(private wheatherService: WheatherApiService) { }

  ngOnInit() {
    this.wheatherService.getJSON().subscribe(data => {
      console.log(data);
      this.wheatherData = data;
      this.forecast = this.wheatherData.forecasts;
      console.log("*****************",this.forecast.forecasts)
  });

}
}