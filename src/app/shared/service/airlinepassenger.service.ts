import { Injectable } from '@angular/core';
import { Ipassenger } from '../module/data.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AirlinepassengerService {

  passengerArray : Array<Ipassenger> = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
  ];

  constructor(
    private _SnackbarService : SnackbarService
  ) { }

  fetchAllPassenger() : Array<Ipassenger> {
    return this.passengerArray
  }

  updatedPassInfo(updPassObj : Ipassenger){
    let getUpdIndex = this.passengerArray.findIndex(p => p.id === updPassObj.id)
    this.passengerArray[getUpdIndex] = updPassObj;
    let obj = this.passengerArray[getUpdIndex];
    this._SnackbarService.openSnackBar(`The Passenger ${obj.fullname} is updated to ${updPassObj.fullname} Successfully!!!`)
  }

  removePassInfo(removeObj : Ipassenger){
      confirm(`${removeObj.fullname} Do you want to Remove the Passenger!!!`);
      let getRemoveIndex = this.passengerArray.findIndex(p => p.id === removeObj.id)
      this.passengerArray.splice(getRemoveIndex, 1);
      this._SnackbarService.openSnackBar(`The Passenger ${removeObj.fullname} is Removed Successfully!!!`)
  }
}
