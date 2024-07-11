import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';

const materialArr = [
     MatCardModule,
     MatButtonModule,
     MatIconModule,
     MatSnackBarModule,
     MatDividerModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialArr
  ],
  exports:[
    ...materialArr
  ]
})
export class ModuleModule { }
