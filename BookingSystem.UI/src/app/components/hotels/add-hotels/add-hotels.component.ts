import { HotelsService } from './../../../Services/hotel/hotels.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotels } from 'src/app/models/hotels.model';

@Component({
  selector: 'app-add-hotels',
  templateUrl: './add-hotels.component.html',
  styleUrls: ['./add-hotels.component.css'],
})
export class AddHotelsComponent implements OnInit {
  addHotelReq: Hotels = {
    h_id: 0,
    h_name: '',
    h_description: '',
    h_address: '',
  };
  constructor(private hotelsService: HotelsService, private router: Router) {}

  ngOnInit(): void {}

  addHotel() {
    this.hotelsService.addHotel(this.addHotelReq).subscribe({
      //observable return needs subscribtion
      next: (hotels) => {
        this.router.navigate(['navbar/hotels']);
      },
    });
  }
}
