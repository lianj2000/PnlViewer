import { Component, OnInit } from '@angular/core';
import { PnlDataService } from '../service/data/pnl-data.service';
import { ActivatedRoute, Router } from '@angular/router';

export class  Pnlsummary {
  constructor(
    public portfolio:  string,
    public dailyTotalChange: number
  ) {}
}



@Component({
  selector: 'app-pnlsummary',
  templateUrl: './pnlsummary.component.html',
  styleUrls: ['./pnlsummary.component.css']
})

export class PnlsummaryComponent implements OnInit {
  pnls: Pnlsummary[];
  //pnldetails: PnlDetail[];
  message: string

  constructor(private pnlservice: PnlDataService){ }

  ngOnInit() {
    this.retrievePnlsummary();
  }

  retrievePnlsummary() {
    this.pnlservice.retrievePnlsummary().subscribe(
      response => {
        console.log(response);
        this.pnls = response;
      }
    )
  }

 /* gotoPnlDetail(portfolio){
    this.router.navigate(['pnldetails',portfolio]);
  }
*/
}
