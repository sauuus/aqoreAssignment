import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsService } from 'src/app/Services/hotels.service';
import { Hotels } from 'src/app/models/hotels.model';
@Component({
  selector: 'app-edit-hotels',
  templateUrl: './edit-hotels.component.html',
  styleUrls: ['./edit-hotels.component.css'],
})
export class EditHotelsComponent implements OnInit {
  // hotelReactiveForm: FormGroup;

  editHotelReq: Hotels = {
    h_id: 0,
    h_name: '',
    h_description: '',
    h_address: '',
  };
  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.hotelReactiveForm = new FormGroup({
    //   h_name: new FormControl(null,  [Validators.required, Validators.pattern(/^[^0-9]*$/), Validators.minLength(3)]),
    //   h_description: new FormControl(null,  [Validators.required, Validators.pattern(/^[^0-9]*$/), Validators.minLength(3)]),
    //   h_address: new FormControl(null,  [Validators.required, Validators.pattern(/^[^0-9]*$/), Validators.minLength(3)])

    // }};

    this.route.paramMap.subscribe({
      next: (params) => {
        const idString = params.get('id');
        if(idString !== null){
          const id = parseInt(idString);
        if (id) {
          this.hotelService.getHotel(id).subscribe({
            next: (response) => {
              this.editHotelReq = response;
              console.log(this.editHotelReq);
            },
          });
        } else {
          console.log('nono');
        }
      }
    }
    });
  }

  updateHotel() {
    this.hotelService
      .updateHotel(this.editHotelReq.h_id, this.editHotelReq)
      .subscribe({
        next: (hotels) => {
          this.router.navigate(['hotels']);
        },
      });
  }

  deleteHotel(h_id: number){
    this.hotelService.deleteHotel(h_id)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['hotels'])
      }
    })
  }
}
