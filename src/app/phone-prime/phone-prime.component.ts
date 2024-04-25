import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-prime',
  templateUrl: './phone-prime.component.html',
  styleUrl: './phone-prime.component.css'
})
export class PhonePrimeComponent implements OnInit {

  phones:Phone[];

  constructor(private phoneService:PhoneService, private router:Router) {}
  ngOnInit(): void {
    this.phoneService.PrimeIds().subscribe(data=> 
      {
       this.phones=data;
      }
    )
  }

}
