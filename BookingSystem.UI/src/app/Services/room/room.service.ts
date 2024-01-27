import { Room } from './../../models/room.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Hotels } from 'src/app/models/hotels.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) {}

  getAllRoom(): Observable<Room[]> {
    return this.http.get<Room[]>(this.baseApiUrl + 'api/Room/getRoom');
  }

  addRoom(addRoomReq: Room): Observable<Room> {
    return this.http.post<Room>(
      this.baseApiUrl + 'api/Room/addRoom',
      addRoomReq
    );
  }

  getRoom(r_id: number): Observable<Room> {
    return this.http
      .get<Room[]>(this.baseApiUrl + 'api/Room/getRoomById/' + r_id)
      .pipe(map((response) => response[0]));
  }
  getAllHotels(): Observable<Hotels[]> {
    return this.http.get<Hotels[]>(this.baseApiUrl + 'api/Hotel/getHotel');
  }

  updateRoom(r_id: number, editRoomReq: Room): Observable<Room> {
    return this.http.put<Room>(
      this.baseApiUrl + `api/Room/updateRoom/` + r_id,
      editRoomReq
    );
  }

  deleteRoom(r_id: number): Observable<Room> {
    return this.http.delete<Room>(
      this.baseApiUrl + `api/Room/deleteRoom/` + r_id
    );
  }
}