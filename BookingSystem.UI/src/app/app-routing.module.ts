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

const routes: Routes = [
  {
    path: '',
    component: GetHotelsComponent,
  },
  {
    path: 'hotels/:id',
    component: GetHotelsComponent,
  },
  {
    path: 'hotels',
    component: GetHotelsComponent,
  },
  {
    path: 'hotels/addHotels',
    component: AddHotelsComponent,
  },
  {
    path: 'hotels/editHotels/:id',
    component: EditHotelsComponent,
  },
  {
    path: 'room',
    component: GetRoomComponent,
  },
  {
    path: 'room/addRoom',
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
    path: 'customer',
    component: GetCustomerComponent,
  },
  {
    path: 'customer/addCustomer',
    component: AddCustomerComponent,
  },
  {
    path: 'customer/editCustomer/:id',
    component: EditCustomerComponent,
  },
  {
    path: 'edit/customer/:id',
    component: EditCustomerComponent,
  }
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
