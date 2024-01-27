import { Router } from '@angular/router';
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
  constructor(private hotelService: HotelsService, private router: Router) {}

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

  navigateToAddHotels() {
    this.router.navigate(['/getHotels']);
  }
}
