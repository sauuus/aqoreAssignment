import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetHotelsComponent } from './components/hotels/get-hotels/get-hotels.component';
import { AddHotelsComponent } from './components/hotels/add-hotels/add-hotels.component';
import { EditHotelsComponent } from './components/hotels/edit-hotels/edit-hotels.component';

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
    component: GetHotelsComponent,
  },
  {
    path: 'pricing',
    component: GetHotelsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
