import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/shared/module/data.interface';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-productdashboard',
  templateUrl: './productdashboard.component.html',
  styleUrls: ['./productdashboard.component.scss']
})
export class ProductdashboardComponent implements OnInit {

  productArr !: Array<Iproduct>

  constructor(
    private _ProductService : ProductService
  ) { }

  ngOnInit(): void {
    this.productArr = this._ProductService.fetchAllProduct()
  }

}
