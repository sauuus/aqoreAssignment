import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/Services/room/room.service';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {
  editRoomReq: Room = {
    r_id: 0,
    h_id: 0,
    r_type: '',
    price: 0,
    remainingQuantity: 0,
    available: false,
    hotel: 0
  };
  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const idString = params.get('id');
        if (idString !== null) {
          const id = parseInt(idString);
          if (id) {
            this.roomService.getRoom(id).subscribe({
              next: (response) => {
                this.editRoomReq = response;
                this.editRoomReq.h_id = this.editRoomReq.hotel.h_id; // Initialize h_id
                console.log(this.editRoomReq);
              },
            });
          } else {
            console.log('nono');
          }
        }
      },
    });
  }

  updateRoom() {
    this.roomService
      .updateRoom(this.editRoomReq.r_id, this.editRoomReq)
      .subscribe({
        next: (room) => {
          this.router.navigate(['room']);
        },
      });
  }

  deleteRoom(r_id: number) {
    this.roomService.deleteRoom(r_id).subscribe({
      next: (response) => {
        this.router.navigate(['room']);
      },
    });
  }
}
