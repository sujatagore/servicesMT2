import { Component, Input, OnInit } from '@angular/core';
import { Iproduct, productstatus } from 'src/app/shared/module/data.interface';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {

  @Input() productObj !: Iproduct
  productStatusEnum = productstatus

  constructor(
    private _ProductService : ProductService
  ) { }

  ngOnInit(): void {
  }

  onStatusUpd(status : productstatus){
      this.productObj.productstatus = status
      this._ProductService.updatedStatus(this.productObj)
  }

}
