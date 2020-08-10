import { Component, OnInit } from '@angular/core';
import { PnlDataService } from '../service/data/pnl-data.service';
import { ActivatedRoute } from '@angular/router';

export class  PnlDetail {
  constructor(
    public portfolio:  string,
    public ticker:  string,
    public dailyChange: number,
    public position: number,
    public current_price: number,
    public pre_close: number
  ) {}
}

@Component({
  selector: 'app-pnldetail',
  templateUrl: './pnldetail.component.html',
  styleUrls: ['./pnldetail.component.css']
})
export class PnldetailComponent implements OnInit {
  
  pnls: PnlDetail[];
  message: string
  region: string

  constructor(private pnlservice: PnlDataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.region = this.route.snapshot.params['region']
    this.retrievePnlDetailRegion(this.region);
  }

  retrievePnlDetailRegion(region) {
    this.pnlservice.retrievePnlDetailRegion(region).subscribe(
      response => {
        console.log(response);
        this.pnls = response;
      }
    )
  }

  retrievePnlDetails() {
    this.pnlservice.retrievePnlDetailAll().subscribe(
      response => {
        console.log(response);
        this.pnls = response;
      }
    )
  }

}
