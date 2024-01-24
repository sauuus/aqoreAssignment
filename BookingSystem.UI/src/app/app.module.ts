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
import { EditRoomComponent } from './components/room/edit-room/edit-room.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { GetCustomerComponent } from './components/customer/get-customer/get-customer.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
