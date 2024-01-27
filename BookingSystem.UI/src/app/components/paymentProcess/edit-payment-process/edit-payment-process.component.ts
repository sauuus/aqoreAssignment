import { PaymentProcess } from './../../../models/paymentProcess.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentProcessService } from 'src/app/Services/paymentProcess/payment-process.service';

@Component({
  selector: 'app-edit-payment-process',
  templateUrl: './edit-payment-process.component.html',
  styleUrls: ['./edit-payment-process.component.css'],
})
export class EditPaymentProcessComponent implements OnInit {
  editPaymentProcessReq: PaymentProcess = {
    p_id: 0,
    c_id: 0,
    r_id: 0,
    quantity: 0,
    transactionDate: '',
  };
  constructor(
    private route: ActivatedRoute,
    private paymentProcessService: PaymentProcessService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const tempVariable = {};
    this.route.paramMap.subscribe({
      next: (params) => {
        const idString = params.get('id');

        if (idString !== null) {
          const id = parseInt(idString);

          if (id) {
            this.paymentProcessService.getPaymentProcess(id).subscribe({
              next: (response) => {
                console.log(response);
                this.editPaymentProcessReq = response;
                this.editPaymentProcessReq.p_id = id; // Initialize p_id
              },
            });
          }
        }
      },
    });
  }

  updatePayment() {
    this.paymentProcessService
      .updatePaymentProcess(
        this.editPaymentProcessReq.p_id,
        this.editPaymentProcessReq
      )
      .subscribe({
        next: (paymentProcess) => {
          this.router.navigate(['paymentProcess']);
        },
      });
  }

  deletePayment(p_id: number) {
    this.paymentProcessService.deletePaymentProcess(p_id).subscribe({
      next: (response) => {
        this.router.navigate(['paymentProcess']);
      },
    });
  }
}
