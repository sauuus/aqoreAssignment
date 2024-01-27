import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/Services/invoice/invoice.service';
import { Invoice } from 'src/app/models/invoice.model';

@Component({
  selector: 'app-get-invoice',
  templateUrl: './get-invoice.component.html',
  styleUrls: ['./get-invoice.component.css']
})
export class GetInvoiceComponent implements OnInit {

  invoices: Invoice[] = [];
  constructor(private invoiceService: InvoiceService) {}
  ngOnInit(): void {
    this.invoiceService.getAllInvoice()
    .subscribe({
      next: (response) => {
        this.invoices = response;
        console.log(response);
      },
      error: (err) => {
        console.log(err)
      }
    });
  }
}
