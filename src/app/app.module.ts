import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleModule } from './material/module/module.module';
import { PassengerDashboardComponent } from './shared/component/airlinePassenger/passenger-dashboard/passenger-dashboard.component';
import { PassengercardsComponent } from './shared/component/airlinePassenger/passengercards/passengercards.component';
import { PassengercountComponent } from './shared/component/airlinePassenger/passengercount/passengercount.component';
import { ProductdashboardComponent } from './shared/component/product/productdashboard/productdashboard.component';
import { ProductcardComponent } from './shared/component/product/productcard/productcard.component';
import { ProductformComponent } from './shared/component/product/productform/productform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PassengerDashboardComponent,
    PassengercardsComponent,
    PassengercountComponent,
    ProductdashboardComponent,
    ProductcardComponent,
    ProductformComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModuleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
