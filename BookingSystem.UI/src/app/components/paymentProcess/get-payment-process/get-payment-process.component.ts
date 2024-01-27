import { Component, OnInit } from '@angular/core';
import { PaymentProcessService } from 'src/app/Services/paymentProcess/payment-process.service';
import { PaymentProcess } from 'src/app/models/paymentProcess.model';

@Component({
  selector: 'app-get-payment-process',
  templateUrl: './get-payment-process.component.html',
  styleUrls: ['./get-payment-process.component.css']
})
export class GetPaymentProcessComponent implements OnInit {

  payments: PaymentProcess[] = [];
  constructor(private paymentProcessService: PaymentProcessService) {}

  ngOnInit(): void {
    this.paymentProcessService.getAllProcess()
    .subscribe({
      next: (response) => {
        this.payments = response;
        console.log(response);
      },
      error: (err) => {
        console.log(err)
      }
    });
  }
}