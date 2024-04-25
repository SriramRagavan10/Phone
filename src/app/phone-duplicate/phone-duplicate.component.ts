import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-duplicate',
  templateUrl: './phone-duplicate.component.html',
  styleUrl: './phone-duplicate.component.css'
})
export class PhoneDuplicateComponent implements OnInit {
  phones:Phone[];
  constructor(private phoneService:PhoneService) {}
  ngOnInit(): void {
    this.phoneService.getDup().subscribe(data=>
      {
        this.phones=data;
      }
    )
  }
}
