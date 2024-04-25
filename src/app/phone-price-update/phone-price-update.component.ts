import { Component } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-price-update',
  templateUrl: './phone-price-update.component.html',
  styleUrl: './phone-price-update.component.css'
})
export class PhonePriceUpdateComponent {

  phones:Phone=new Phone();
  constructor(private phoneService:PhoneService, private router: Router) {}
  updatePrice() {
    this.phoneService.updateByRating(),
    window.alert("UPDATE SUCCESSFULLY")
    this.router.navigate(['/get'], { replaceUrl:true })
  }

}
