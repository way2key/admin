import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {
  private apiUrl = 'http://localhost:4000/api/admin-data';
  private auth = 'Bearer '+ localStorage.getItem("token");
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.auth
    })
  };
  constructor(private http: HttpClient) { }

  createTimeplan(payload){
    const url = this.apiUrl + '-timeplan';

    return this.http.post<any>(url, payload, this.httpOptions);
  }

  getTimeplan() {
    const url = this.apiUrl + '-timeplan/timeplan';
    return this.http.get<any>(url, this.httpOptions);
  }

  getShiftFromId(shiftId: string) {
    const url = this.apiUrl + '-timeplan/shift/'+shiftId;
    return this.http.get<any>(url, this.httpOptions);
  }
}