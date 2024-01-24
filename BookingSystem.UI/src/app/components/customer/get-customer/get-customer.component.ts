import { CustomerService } from 'src/app/Services/customer/customer.service';
import { Customer } from './../../../models/customer.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomer()
    .subscribe({
      next: (response) => {
        this.customers = response;
        console.log(response);
      },
      error: (err) => {
        console.log(err)
      }
    });
  }
}


