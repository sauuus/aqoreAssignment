import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Hotels } from '../../models/hotels.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelsService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) {}

  getAllHotels(): Observable<Hotels[]> {
    return this.http.get<Hotels[]>(this.baseApiUrl + 'api/Hotel/getHotel');
  }
  GetHotelsByAvailable(): Observable<Hotels[]> {
    return this.http.get<Hotels[]>(
      this.baseApiUrl + 'api/Hotel/getHotelByAvailable'
    );
  }

  addHotel(addHotelReq: Hotels): Observable<Hotels> {
    return this.http.post<Hotels>(
      this.baseApiUrl + 'api/Hotel/addHotel',
      addHotelReq
    );
  }

  getHotel(h_id: number): Observable<Hotels> {
    return this.http
      .get<Hotels[]>(this.baseApiUrl + 'api/Hotel/getHotelById/' + h_id)
      .pipe(map((response) => response[0]));
  }

  updateHotel(h_id: number, editHotelReq: Hotels): Observable<Hotels> {
    return this.http.put<Hotels>(
      this.baseApiUrl + `api/Hotel/updateHotel/` + h_id,
      editHotelReq
    );
  }

  deleteHotel(h_id: number): Observable<Hotels> {
    return this.http.delete<Hotels>(
      this.baseApiUrl + `api/Hotel/deleteHotel/` + h_id
    );
  }
}
