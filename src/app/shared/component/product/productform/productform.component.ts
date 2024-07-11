import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iproduct, productstatus } from 'src/app/shared/module/data.interface';
import { ProductService } from 'src/app/shared/service/product.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {

  @ViewChild('productForm') productFormRef !: NgForm

  constructor(
    private _Uuidservice : UuidService,
    private _ProductService : ProductService
  ) { }

  ngOnInit(): void {
  }

  onProductAdd(){
    if (this.productFormRef.valid) {
      let NewProduct : Iproduct = {
        ...this.productFormRef.value,
        id : this._Uuidservice.uuid(),
        productstatus : productstatus.InProgress
      }

      this.productFormRef.reset();
      this._ProductService.addNewProduct(NewProduct)
    }
  }
}
