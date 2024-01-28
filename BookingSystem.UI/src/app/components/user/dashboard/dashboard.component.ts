import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelsService } from 'src/app/Services/hotel/hotels.service';
import { Hotels } from 'src/app/models/hotels.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  hotels: Hotels[] = [];

  constructor(private hotelService: HotelsService, private router: Router) { }

  ngOnInit(): void {
    this.hotelService.getAllHotels().subscribe({
      next: (response) => {
        this.hotels = response;
        // console.log(this.hotels[0].h_id)
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
    getAvailableHotels(){
    this.hotelService.GetHotelsByAvailable().subscribe({
      next: (response) => {
        this.hotels = response;
        console.log(response)
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  

}
