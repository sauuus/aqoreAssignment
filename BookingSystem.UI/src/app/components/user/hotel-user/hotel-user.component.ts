import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsService } from 'src/app/Services/hotel/hotels.service';
import { RoomService } from 'src/app/Services/room/room.service';
import { Hotels } from 'src/app/models/hotels.model';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-hotel-user',
  templateUrl: './hotel-user.component.html',
  styleUrls: ['./hotel-user.component.css'],
})
export class HotelUserComponent implements OnInit {
  hotels: Hotels = {
    h_id: 0,
    h_name: '',
    h_description: '',
    h_address: '',
  };
  rooms: Room[] = [];

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private hotelService: HotelsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const idString = params.get('id');
        if (idString !== null) {
          const id = parseInt(idString);
          if (id) {
            this.hotelService.getHotel(id).subscribe({
              next: (response) => {
                this.hotels = response;
              },
            });
          } else {
            console.log('nono');
          }
        }
      },
    });

    this.route.paramMap.subscribe({
      next: (params) => {
        const idString = params.get('id');
        if (idString !== null) {
          const id = parseInt(idString);
          if (id) {
            this.roomService.getAllRoomByHotel(id).subscribe({
              next: (response) => {
                this.rooms = response;
              },
            });
          } else {
            console.log('nono');
          }
        }
      },
    });
  }

  getAvailableRooms(){
    this.route.paramMap.subscribe({
      next: (params) => {
        const idString = params.get('id');
        if (idString !== null) {
          const id = parseInt(idString);
          if (id) {
            this.roomService.GetRoomsByAvailableId(id).subscribe({
              next: (response) => {
               this.rooms = response
              },
            });
          } else {
            console.log('nono');
          }
        }
      },
    });
  // getAvailableRooms() {
  //   const id = this.route.snapshot.paramMap.get('h_id');
  //   if (id) {
  //     this.roomService.GetRoomsByAvailableId(+id).subscribe({
  //       next: (response) => {
  //         this.rooms = response;
  //       },
  //     });
  //   } else {
  //     console.log('nono');
  //   }
  }
}
