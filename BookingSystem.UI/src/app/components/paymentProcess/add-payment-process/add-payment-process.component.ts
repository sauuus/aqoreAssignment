import { PaymentProcess } from './../../../models/paymentProcess.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentProcessService } from 'src/app/Services/paymentProcess/payment-process.service';

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
  constructor(private paymentProcessService: PaymentProcessService, private router: Router) { }

  ngOnInit(): void {
  }
  addPayment() {
    this.paymentProcessService.addPaymentProcess(this.addPaymentProcessReq).subscribe({
      //observable return needs subscribtion
      next: (PaymentProcess) => {
        this.router.navigate(['paymentProcess']);
      },
    });
}
}
