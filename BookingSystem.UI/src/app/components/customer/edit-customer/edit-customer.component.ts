import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer/customer.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerReactiveForm!: FormGroup;
  
  editCustomerReq: Customer = {
    c_id: 0,
    fullName: '',
    email: '',
    contact: ''
  };
  constructor(private route: ActivatedRoute, private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.customerReactiveForm = new FormGroup({
      fullName: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      contact: new FormControl(null,[Validators.required, Validators.pattern(('^[0-9]{10}$'))])
    });
    this.route.paramMap.subscribe({
      next: (params) => {
        const idString = params.get('c_id');

        if(idString !== null){
          const id = parseInt(idString);


        if(id){
          this.customerService.getCustomer(id).subscribe({
            next: (response) => {
              this.editCustomerReq = response
              console.log(response);
              // this.populateForm();
            }
          });
        }
      }
    }
    });
  }

  // private populateForm(): void {
  //   this.customerReactiveForm.patchValue({
  //     fullName: this.editCustomerReq.fullName,
  //     email: this.editCustomerReq.email,
  //     contact: this.editCustomerReq.contact


  //   });

    // }

    updateCustomer(){
      this.customerService.updateCustomer(this.editCustomerReq.c_id, this.editCustomerReq)
      .subscribe({
        next: (response) => {
          this.router.navigate(['customer']);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }

    deleteCustomer(c_id: number){
      this.customerService.deleteCustomer(c_id)
      .subscribe({
        next: (response) => {
          this.router.navigate(['customer']);

        }
      });
    }
}