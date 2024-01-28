import { PaymentProcessService } from 'src/app/Services/paymentProcess/payment-process.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsService } from 'src/app/Services/hotel/hotels.service';
import { RoomService } from 'src/app/Services/room/room.service';
import { Customer } from 'src/app/models/customer.model';
import { Invoice } from 'src/app/models/invoice.model';
import { PaymentProcess } from 'src/app/models/paymentProcess.model';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  rooms: Room= {
    r_id: 0,
    h_id: 0,
    r_type: '',
    price: 0,
    remainingQuantity: 0,
    available: false,
    hotel: 0
  };
  invoice: Invoice = {
    invoiceId: 0,
    c_id: 0,
    invoiceDate: '',
    totalAmount: 0,
    discount: 0,
    discountedAmount: 0,
  };

  customers: Customer[] =[];
  selectedCustomerId: number | null = null;
  paymentProcess: PaymentProcess = {
    p_id: 0,
    c_id: 0,
    r_id: 0,
    quantity: 0,
    transactionDate: '',
  };
  constructor(private route: ActivatedRoute,private roomService: RoomService, private paymentProcessService:PaymentProcessService, private hotelService: HotelsService, private router: Router) {
    this.customers = [];
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const idString = params.get('id');
        if (idString !== null) {
          const id = parseInt(idString);
          if (id) {
            this.roomService.getRoom(id).subscribe({
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
    this.paymentProcessService.getAllCustomer().subscribe((customers) => {
      this.customers = customers;
    });
  }
  addDetails(payment: any): void {
    if (this.selectedCustomerId) {
      this.paymentProcess.c_id = this.selectedCustomerId;
    }
    this.paymentProcessService.addPaymentProcess(this.paymentProcess).subscribe({
      //observable return needs subscribtion
      next: (paymentProcess) => {
       console.log(paymentProcess)
      },
    });
}
}