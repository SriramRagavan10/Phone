import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-black',
  templateUrl: './phone-black.component.html',
  styleUrl: './phone-black.component.css'
})
export class PhoneBlackComponent implements OnInit {

  phones:Phone[];
  constructor(private phoneService:PhoneService) {}
  ngOnInit(): void {
    this.phoneService.getBlack().subscribe(data=> 
      {
      this.phones=data;
      }
    )
  }

}
