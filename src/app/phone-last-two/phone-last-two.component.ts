import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-last-two',
  templateUrl: './phone-last-two.component.html',
  styleUrl: './phone-last-two.component.css'
})
export class PhoneLastTwoComponent implements OnInit {

  phones:Phone[];
  constructor(private phoneService:PhoneService) {}
  ngOnInit(): void {
    this.phoneService.getTwo().subscribe(data=> 
      {
        this.phones=data;
      }
    )
  }

}
