import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { CabComponent } from './cab/cab.component';
import { HomeComponent } from './home/home.component';
import { PlaceComponent } from './place/place.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"place", component:PlaceComponent},
  {path:"cab", component:CabComponent},
  {path:"history", component:BookingHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
