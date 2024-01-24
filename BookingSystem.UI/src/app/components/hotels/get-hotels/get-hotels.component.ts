import { HotelsService } from '../../../Services/hotel/hotels.service';
import { Component, OnInit } from '@angular/core';
import { Hotels } from 'src/app/models/hotels.model';

@Component({
  selector: 'app-get-hotels',
  templateUrl: './get-hotels.component.html',
  styleUrls: ['./get-hotels.component.css'],
})
export class GetHotelsComponent implements OnInit {
  hotels: Hotels[] = [];
  constructor(private hotelService: HotelsService) {}

  ngOnInit(): void {
    this.hotelService.getAllHotels().subscribe({
      next: (hotels) => {
        this.hotels = hotels;
        // console.log(this.hotels[0].h_id)
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
