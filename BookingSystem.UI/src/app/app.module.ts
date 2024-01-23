import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddHotelsComponent } from './components/hotels/add-hotels/add-hotels.component';
import { GetHotelsComponent } from './components/hotels/get-hotels/get-hotels.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { EditHotelsComponent } from './components/hotels/edit-hotels/edit-hotels.component';
import { HotelsService } from './Services/hotels.service';

@NgModule({
  declarations: [
    AppComponent,
    AddHotelsComponent,
    GetHotelsComponent,
    EditHotelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
