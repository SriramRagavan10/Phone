import { Component } from '@angular/core';
import { PhoneService } from '../phone.service';
import { Router } from '@angular/router';
import { Phone } from '../phone';

@Component({
  selector: 'app-phone-price',
  templateUrl: './phone-price.component.html',
  styleUrl: './phone-price.component.css'
})
export class PhonePriceComponent {
  phones:Phone=new Phone();
  constructor(private phoneService:PhoneService, private router: Router) {}
  savePhone() {
    this.phoneService.postPhonePrice(this.phones);
    if (this.phones.price < 70000) {
      window.alert("The price is below 70000");
    } else {
      this.router.navigate(['/get'], { replaceUrl:true }), window.alert("POSTED SUCCESSFULLY");
    }
  }

}
