import { Component } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-brand',
  templateUrl: './phone-brand.component.html',
  styleUrl: './phone-brand.component.css'
})
export class PhoneBrandComponent {

  phones:Phone = new Phone();

  constructor(private phoneService:PhoneService, private router:Router) {}

  phoneBrand() {
    this.phoneService.postPhoneByBrand(this.phones);
    if(this.phones.brand.startsWith('S')) {
      window.alert("POSTED SUCCESSFULLY"), this.router.navigate(['/get'], {replaceUrl:true})
    }
    else {
      window.alert("The Brand Name is not Starts With S");
    }
  }

}
