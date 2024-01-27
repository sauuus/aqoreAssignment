import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from 'src/app/Services/invoice/invoice.service';
import { Customer } from 'src/app/models/customer.model';
import { Invoice } from 'src/app/models/invoice.model';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css'],
})
export class EditInvoiceComponent {
  // invoiceReactiveForm!: FormGroup;
  editInvoiceReq: Invoice = {
    invoiceId: 0,
    c_id: 0,
    invoiceDate: '',
    totalAmount: 0,
    discount: 0,
    discountedAmount: 0,
  };
  // customers: Customer[] = [];

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService,
    private router: Router
  ) {}

    // this.invoiceReactiveForm = new FormGroup({
    //   c_id: new FormControl(null, Validators.required),
    //   invoiceDate: new FormControl(null, Validators.required),
    //   totalAmount: new FormControl(null, [
    //     Validators.required,
    //     Validators.min(0),
    //   ]),
    //   discount: new FormControl(null, [
    //     Validators.required,
    //     Validators.min(0),
    //     Validators.max(1),
    //   ]),
    //   discountedAmount: new FormControl(null, [
    //     Validators.required,
    //     Validators.min(0),
    //   ]),
    // });

    // this.fetchCustomer();

    ngOnInit(): void {
      this.route.paramMap.subscribe({
        next: (params) => {
          const idString = params.get('id');
          if (idString !== null) {
            const id = parseInt(idString);
            if (id) {
              this.invoiceService.getInvoice(id).subscribe({
                next: (response) => {
                  this.editInvoiceReq = response;
                  this.editInvoiceReq.c_id = this.editInvoiceReq.c_id; // Initialize c_id
                  console.log(this.editInvoiceReq);
                },
              });
            } else {
              console.log('nono');
            }
          }
        },
      });
    }

  // fetchCustomer(): void {
  //   this.invoiceService.getAllCustomer().subscribe(
  //     (customers) => {
  //       this.customers = customers;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }


  // private populateForm(): void {
  //   this.invoiceReactiveForm.patchValue({
  //     c_id: this.editInvoiceReq.c_id,
  //     invoiceDate: this.editInvoiceReq.invoiceDate,
  //     totalAmount: this.editInvoiceReq.totalAmount,
  //     discount: this.editInvoiceReq.discount,
  //     discountedAmount: this.editInvoiceReq.discountedAmount
  //   });
  // }
  updateInvoice() {
    this.invoiceService
      .updateInvoice(this.editInvoiceReq.invoiceId, this.editInvoiceReq)
      .subscribe({
        next: (invoice) => {
          this.router.navigate(['invoice']);
        },
      });
  }

  deleteInvoice(invoiceId: number) {
    this.invoiceService.deleteInvoice(invoiceId).subscribe({
      next: (invoice) => {
        this.router.navigate(['invoice']);
      },
    });
  }
}