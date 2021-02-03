import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class WheatherApiService {

  constructor(private http:HttpClient) { 
    this.getJSON().subscribe(data => {
            console.log(data);
        });
        
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/wheather.json");
}
}
