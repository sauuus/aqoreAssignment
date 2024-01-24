import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/Services/room/room.service';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-get-room',
  templateUrl: './get-room.component.html',
  styleUrls: ['./get-room.component.css']
})
export class GetRoomComponent implements OnInit {

  rooms: Room[] = [];
  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.roomService.getAllRoom()
    .subscribe({
      next: (response) => {
        this.rooms = response;
        console.log(response);
      },
      error: (err) => {
        console.log(err)
      }
    });
  }
}