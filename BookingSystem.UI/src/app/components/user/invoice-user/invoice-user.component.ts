import { PaymentProcess } from 'src/app/models/paymentProcess.model';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { Invoice } from 'src/app/models/invoice.model';
import { Room } from 'src/app/models/room.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/Services/room/room.service';
import { PaymentProcessService } from 'src/app/Services/paymentProcess/payment-process.service';
import { HotelsService } from 'src/app/Services/hotel/hotels.service';
import { InvoiceService } from 'src/app/Services/invoice/invoice.service';

@Component({
  selector: 'app-invoice-user',
  templateUrl: './invoice-user.component.html',
  styleUrls: ['./invoice-user.component.css'],
})
export class InvoiceUserComponent implements OnInit {
  rooms: Room = {
    r_id: 0,
    h_id: 0,
    r_type: '',
    price: 0,
    remainingQuantity: 0,
    available: false,
    hotel: 0,
  };
  invoice: Invoice = {
    invoiceId: 0,
    c_id: 0,
    invoiceDate: '',
    totalAmount: 0,
    discount: 0,
    discountedAmount: 0,
  };
  customer: Customer = {
    c_id: 0,
    fullName: '',
    email: '',
    contact: '',
  };
  paymentProcess: PaymentProcess = {
    p_id: 0,
    c_id: 0,
    r_id: 0,
    quantity: 0,
    transactionDate: '',
  };
  invoiceNumber = Math.floor(10000 + Math.random() * 90000);
  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private invoiceService: InvoiceService,
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
                this.rooms = response;
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
        const idCus = params.get('c_id');
        if (idString !== null) {
          const id = parseInt(idString);
          if (id) {
            this.invoiceService.getInvoice(id).subscribe({
              next: (response) => {
                this.invoice = response;
                console.log(idCus)
              },
            });
          } 
        }
          if (idCus !== null) {
            const idCustomer = parseInt(idCus);
          if(idCustomer){
            this.invoiceService.getCustomer(idCustomer).subscribe({
              next: (response) => {
                this.customer = response;
              }
            });
          }
        }
      },
    });
  }

  printThisPage() {
    window.print();
  }
}
