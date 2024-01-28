import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddHotelsComponent } from './components/hotels/add-hotels/add-hotels.component';
import { GetHotelsComponent } from './components/hotels/get-hotels/get-hotels.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditHotelsComponent } from './components/hotels/edit-hotels/edit-hotels.component';
import { HotelsService } from './Services/hotel/hotels.service';
import { AddRoomComponent } from './components/room/add-room/add-room.component';
import { GetRoomComponent } from './components/room/get-room/get-room.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { GetCustomerComponent } from './components/customer/get-customer/get-customer.component';
import { AddPaymentProcessComponent } from './components/paymentProcess/add-payment-process/add-payment-process.component';
import { EditPaymentProcessComponent } from './components/paymentProcess/edit-payment-process/edit-payment-process.component';
import { GetPaymentProcessComponent } from './components/paymentProcess/get-payment-process/get-payment-process.component';
import { AddInvoiceComponent } from './components/invoice/add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './components/invoice/edit-invoice/edit-invoice.component';
import { GetInvoiceComponent } from './components/invoice/get-invoice/get-invoice.component';
import { EditRoomComponent } from './components/room/edit-room/edit-room.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { HotelUserComponent } from './components/user/hotel-user/hotel-user.component';
import { UserInfoComponent } from './components/user/user-info/user-info.component';
import { InvoiceUserComponent } from './components/user/invoice-user/invoice-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddHotelsComponent,
    GetHotelsComponent,
    EditHotelsComponent,
    AddRoomComponent,
    GetRoomComponent,
    EditRoomComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    GetCustomerComponent,
    AddPaymentProcessComponent,
    EditPaymentProcessComponent,
    GetPaymentProcessComponent,
    AddInvoiceComponent,
    EditInvoiceComponent,
    GetInvoiceComponent,
    NavbarComponent,
    DashboardComponent,
    HotelUserComponent,
    UserInfoComponent,
    InvoiceUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
