import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-get',
  templateUrl: './phone-get.component.html',
  styleUrl: './phone-get.component.css'
})
export class PhoneGetComponent implements OnInit {

  phones:Phone[];

  constructor(private phoneService:PhoneService, private router:Router) { }
  ngOnInit() : void {
    this.phoneService.getPhone().subscribe(data =>
      {
        this.phones=data;
      }
    )
  }

}

