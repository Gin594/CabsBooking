import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { CabComponent } from './cab/cab.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { AddBookingComponent, AddBookingModalContent } from './modal/add-booking/add-booking.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditBookingComponent, EditBookingModalContent } from './modal/edit-booking/edit-booking.component';
import { PlaceComponent } from './place/place.component';
import { AddPlaceComponent, AddPlaceModalContent } from './modal/add-place/add-place.component';
import { EditPlaceComponent, EditPlaceModalContent } from './modal/edit-place/edit-place.component';
import { AddCabComponent, AddCabModalContent } from './modal/add-cab/add-cab.component';
import { EditCabComponent, EditCabModalContent } from './modal/edit-cab/edit-cab.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    BookingHistoryComponent,
    CabComponent,
    HeaderComponent,
    FooterComponent,
    AddBookingComponent,
    AddBookingModalContent,
    EditBookingComponent,
    EditBookingModalContent,
    PlaceComponent,
    AddPlaceComponent,
    AddPlaceModalContent,
    EditPlaceComponent,
    EditPlaceModalContent,
    AddCabComponent,
    AddCabModalContent,
    EditCabComponent,
    EditCabModalContent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
