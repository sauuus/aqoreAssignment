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
  
  editCustomerReq: Customer = {
    c_id: 0,
    fullName: '',
    email: '',
    contact: ''
  };
  constructor(private route: ActivatedRoute, private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const idString = params.get('id');
  
        if(idString !== null){
          const id = parseInt(idString);
  
          if(id){
            this.customerService.getCustomer(id).subscribe({
              next: (response) => {
                this.editCustomerReq = response;
                console.log(this.editCustomerReq);

              }
            });
          }else {
            console.log('nono');
          }
        }
      }
    });
  }

    updateCustomer(){
      this.customerService.updateCustomer(this.editCustomerReq.c_id, this.editCustomerReq)
      .subscribe({
        next: (customer) => {
          this.router.navigate(['navbar/customer']);
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
          this.router.navigate(['navbar/customer']);

        }
      });
    }
}