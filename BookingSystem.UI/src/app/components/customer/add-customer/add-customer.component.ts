import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer/customer.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  // addCustomerReq: Customer = {
  //   c_id: 0,
  //   fullName: '',
  //   email: '',
  //   contact: '',
  // };
  customerReactiveForm!: FormGroup;
  fullName!: string;
  email!: string;
  contact!: string;

  
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.customerReactiveForm = new FormGroup({
      fullName: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      contact: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{10}$')])

    });
  }
  addCustomer(): void {
    if (this.customerReactiveForm.invalid) {
      return;
    }

    this.fullName = this.customerReactiveForm.value.fullName;
    this.email = this.customerReactiveForm.value.email;
    this.contact = this.customerReactiveForm.value.contact;


    const customer: Customer = {
      c_id: 0,
      fullName: this.fullName,
      email: this.email,
      contact: this.contact
    };

    this.customerService.addCustomer(customer).subscribe(
      {
        next: () => {
          this.router.navigate(['customer']);
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }
}



