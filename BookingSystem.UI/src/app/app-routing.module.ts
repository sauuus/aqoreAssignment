import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetHotelsComponent } from './components/hotels/get-hotels/get-hotels.component';
import { AddHotelsComponent } from './components/hotels/add-hotels/add-hotels.component';
import { EditHotelsComponent } from './components/hotels/edit-hotels/edit-hotels.component';
import { GetRoomComponent } from './components/room/get-room/get-room.component';
import { AddRoomComponent } from './components/room/add-room/add-room.component';
import { EditRoomComponent } from './components/room/edit-room/edit-room.component';
import { GetCustomerComponent } from './components/customer/get-customer/get-customer.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { GetPaymentProcessComponent } from './components/paymentProcess/get-payment-process/get-payment-process.component';
import { AddPaymentProcessComponent } from './components/paymentProcess/add-payment-process/add-payment-process.component';
import { EditPaymentProcessComponent } from './components/paymentProcess/edit-payment-process/edit-payment-process.component';
import { AddInvoiceComponent } from './components/invoice/add-invoice/add-invoice.component';
import { GetInvoiceComponent } from './components/invoice/get-invoice/get-invoice.component';
import { EditInvoiceComponent } from './components/invoice/edit-invoice/edit-invoice.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { HotelUserComponent } from './components/user/hotel-user/hotel-user.component';
import { UserInfoComponent } from './components/user/user-info/user-info.component';
import { InvoiceUserComponent } from './components/user/invoice-user/invoice-user.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'hotel-user',
    component: HotelUserComponent,
  },
  {
    path: 'hotel-user/:id',
    component: HotelUserComponent,
  },
  {
    path: 'user-info',
    component: UserInfoComponent,
  },
  {
    path: 'user-info/:id',
    component: UserInfoComponent,
  },
  {
    path: 'invoice-user/:id/:c_id',
    component: InvoiceUserComponent,
  },
  {
    path: 'invoice-user/:id',
    component: InvoiceUserComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'hotels/:id',
    component: GetHotelsComponent,
  },
  {
    path: 'navbar/hotels',
    component: GetHotelsComponent,
  },
  {
    path: 'add/hotels',
    component: AddHotelsComponent,
  },
  {
    path: 'hotels/editHotels/:id',
    component: EditHotelsComponent,
  },
  {
    path: 'navbar/room',
    component: GetRoomComponent,
  },
  {
    path: 'add/room',
    component: AddRoomComponent,
  },
  {
    path: 'room/editRoom/:id',
    component: EditRoomComponent,
  },
  {
    path: 'edit/room/:id',
    component: EditRoomComponent,
  },
  {
    path: 'navbar/customer',
    component: GetCustomerComponent,
  },
  {
    path: 'add/customer',
    component: AddCustomerComponent,
  },
  {
    path: 'customer/editCustomer/:id',
    component: EditCustomerComponent,
  },
  {
    path: 'edit/customer/:id',
    component: EditCustomerComponent,
  },
  {
    path: 'navbar/paymentProcess',
    component: GetPaymentProcessComponent,
  },
  {
    path: 'add/paymentProcess',
    component: AddPaymentProcessComponent,
  },
  {
    path: 'paymentProcess/editPaymentProcess/:id',
    component: EditPaymentProcessComponent,
  },
  {
    path: 'navbar/invoice',
    component: GetInvoiceComponent,
  },
  {
    path: 'add/invoice',
    component: AddInvoiceComponent,
  },
  {
    path: 'invoice/editInvoice/:id',
    component: EditInvoiceComponent,
  },
  {
    path: 'edit/invoice/:id',
    component: EditInvoiceComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
