import { environment } from 'src/environments/environment';
import { PaymentProcess } from './../../models/paymentProcess.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { Room } from 'src/app/models/room.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentProcessService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) {}

  getAllProcess(): Observable<PaymentProcess[]> {
    return this.http.get<PaymentProcess[]>(
      this.baseApiUrl + 'api/PaymentProcess/getPayment'
    );
  }

  addPaymentProcess(addPaymentProcessReq: PaymentProcess): Observable<PaymentProcess> {
    return this.http.post<PaymentProcess>(
      this.baseApiUrl + 'api/PaymentProcess/addPaymentProcess',
      addPaymentProcessReq
    );
  }
  getPaymentProcess(p_id: number): Observable<PaymentProcess> {
    return this.http
      .get<PaymentProcess[]>(this.baseApiUrl + 'api/PaymentProcess/getPaymentById/' + p_id)
      .pipe(map((response) => response[0]));
  }

  getCustomer(c_id: number): Observable<Customer> {
    return this.http
      .get<Customer[]>(this.baseApiUrl + 'api/Customer/getCustomerById/' + c_id)
      .pipe(map((response) => response[0]));
  }
  getRoom(r_id: number): Observable<Room> {
    return this.http
      .get<Room[]>(this.baseApiUrl + 'api/Room/getRoomById/' + r_id)
      .pipe(map((response) => response[0]));
  }
  getAllRoom(): Observable<Room[]> {
    return this.http.get<Room[]>(this.baseApiUrl + 'api/Room/getRoom');
  }

  updatePaymentProcess(
    p_id: number,
    editPaymentProcessReq: PaymentProcess
  ): Observable<PaymentProcess> {
    return this.http.put<PaymentProcess>(
      this.baseApiUrl + `api/PaymentProcess/updatePayentProcess/` + p_id,
      editPaymentProcessReq
    );
  }

  deletePaymentProcess(p_id: number): Observable<PaymentProcess> {
    return this.http.delete<PaymentProcess>(
      this.baseApiUrl + `api/PaymentProcess/deletePaymentProcess/` + p_id
    );
  }
}
