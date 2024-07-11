import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from 'src/app/shared/module/data.interface';
import { AirlinepassengerService } from 'src/app/shared/service/airlinepassenger.service';

@Component({
  selector: 'app-passengercards',
  templateUrl: './passengercards.component.html',
  styleUrls: ['./passengercards.component.scss']
})
export class PassengercardsComponent implements OnInit {

  @Input() passObj !: Ipassenger

  IsinEditMode : boolean = false

  @Output() emitPassenger : EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(
    private _AirlinepassengerService : AirlinepassengerService
  ) { }

  ngOnInit(): void {
  }

  onUpdate(updObjName : HTMLInputElement){
      this.passObj = {...this.passObj, fullname : updObjName.value};
      this._AirlinepassengerService.updatedPassInfo(this.passObj)
  }

  onRemove(){
    // confirm(` Do you want to Remove the Passenger!!!`)
    this._AirlinepassengerService.removePassInfo(this.passObj);
    this.emitPassenger.emit(true)
  }

}
