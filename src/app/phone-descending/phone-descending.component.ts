import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-descending',
  templateUrl: './phone-descending.component.html',
  styleUrl: './phone-descending.component.css'
})
export class PhoneDescendingComponent implements OnInit {

  phones:Phone[];
  constructor(private phoneService:PhoneService) {}
  ngOnInit(): void {
    this.phoneService.getDesc().subscribe(data=>
      {
        this.phones=data;
      }
    )
  }

}
