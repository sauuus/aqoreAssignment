import { PaymentProcess } from './../../../models/paymentProcess.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentProcessService } from 'src/app/Services/paymentProcess/payment-process.service';
import { Customer } from 'src/app/models/customer.model';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-add-payment-process',
  templateUrl: './add-payment-process.component.html',
  styleUrls: ['./add-payment-process.component.css']
})
export class AddPaymentProcessComponent implements OnInit {
  addPaymentProcessReq: PaymentProcess = {
    p_id: 0,
    c_id: 0,
    r_id: 0,
    quantity: 0,
    transactionDate: '',
  };
  customers: Customer[] = [];
  rooms: Room[]=[];
  selectedCustomerId: number | null = null;
  selectedRoomId: number | null = null;

  constructor(private paymentProcessService: PaymentProcessService, private router: Router) {
    this.customers = []; 
    this.rooms= [];
   }

  ngOnInit(): void {
    this.paymentProcessService.getAllCustomer().subscribe((customers) => {
      this.customers = customers;
    });
    this.paymentProcessService.getAllRoom().subscribe((rooms) => {
      this.rooms = rooms;
    });
  }
  addPayment(payment: any): void {
    if (this.selectedCustomerId) {
      this.addPaymentProcessReq.c_id = this.selectedCustomerId;
    }
    if (this.selectedRoomId) {
      this.addPaymentProcessReq.r_id = this.selectedRoomId;
    }
    this.paymentProcessService.addPaymentProcess(this.addPaymentProcessReq).subscribe({
      //observable return needs subscribtion
      next: (PaymentProcess) => {
        this.router.navigate(['paymentProcess']);
      },
    });
}
}
