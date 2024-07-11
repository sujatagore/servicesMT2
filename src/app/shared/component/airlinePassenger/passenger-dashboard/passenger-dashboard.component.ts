import { Component, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/shared/module/data.interface';
import { AirlinepassengerService } from 'src/app/shared/service/airlinepassenger.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {

  passengerArray !: Array<Ipassenger>

  totalCount !: number;
  checkInCount !: number

  constructor(
    private _AirlinepassengerService : AirlinepassengerService
  ) { }

  ngOnInit(): void {
    this.passengerArray = this._AirlinepassengerService.fetchAllPassenger();
    this.getCount()
  }

  getCount(){
    this.totalCount = this.passengerArray.length
    this.checkInCount = this.passengerArray.filter(p => p.checkedIn).length
  }

}
