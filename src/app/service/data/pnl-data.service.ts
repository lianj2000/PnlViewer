import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pnlsummary } from 'src/app/pnlsummary/pnlsummary.component';
import { PnlDetail } from 'src/app/pnldetail/pnldetail.component';
import { API_URL } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class PnlDataService {

  constructor(private http: HttpClient) { }

  retrievePnlsummary() {
    return this.http.get<Pnlsummary[]>(`${API_URL}/PnLs`);
  }
 
  retrievePnlDetailAll() {
    //return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
    return this.http.get<PnlDetail[]>(`${API_URL}/PnLDetails`);
   
  }

  retrievePnlDetailRegion(portfolio) {
    //return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
    return this.http.get<PnlDetail[]>(`${API_URL}/PnLDetails/${portfolio}`);
  }
}
