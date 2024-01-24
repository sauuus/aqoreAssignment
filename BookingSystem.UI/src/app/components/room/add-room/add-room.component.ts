import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/Services/room/room.service';
import { Hotels } from 'src/app/models/hotels.model';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css'],
})
export class AddRoomComponent implements OnInit {
  addRoomReq: Room = {
    r_id: 0,
    h_id: 0,
    r_type: '',
    price: 0,
    remainingQuantity: 0,
    available: false,
  };
  roomReactiveForm!: FormGroup;
  hotels!: Hotels[];
  constructor(private roomService: RoomService, private router: Router) {}
  ngOnInit(): void {
    this.roomReactiveForm = new FormGroup({
      h_id: new FormControl(null, Validators.required),
      r_type: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
      remainingQuantity: new FormControl(null, [
        Validators.required,
        Validators.min(0),
      ]),
      available: new FormControl(false, [Validators.required]),
    });

    this.fetchHotels();
  }

  fetchHotels(): void {
    this.roomService.getAllHotels().subscribe(
      (hotels) => {
        this.hotels = hotels;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addRoom() {
    this.roomService.addRoom(this.addRoomReq).subscribe({
      next: (room) => {
        this.router.navigate(['room']);
      },
    });
  }
}

