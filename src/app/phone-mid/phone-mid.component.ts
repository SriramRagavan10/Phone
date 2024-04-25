import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { Phone } from '../phone';

@Component({
  selector: 'app-phone-mid',
  templateUrl: './phone-mid.component.html',
  styleUrl: './phone-mid.component.css'
})
export class PhoneMidComponent implements OnInit {
  phones:Phone[];
  phone:Phone[];
  constructor(private phoneService:PhoneService) {}
  ngOnInit(): void {
    this.phoneService.getMiddle().subscribe(data=>
      {
        this.phones=data;
      }
    )
    this.phoneService.getPhone().subscribe(data=>
      {
        this.phone=data;
      }
    )
  }


}
