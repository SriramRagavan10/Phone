import { Component } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-rating',
  templateUrl: './phone-rating.component.html',
  styleUrl: './phone-rating.component.css'
})
export class PhoneRatingComponent {

  phones:Phone=new Phone();

  constructor(private phoneService:PhoneService, private router:Router) {}

  phoneRating() {
    this.phoneService.postPhoneByRating(this.phones);
    if (this.phones.rating < 8) {
      window.alert("The Rating is Below 8");
    } else {
      window.alert("POSTED SUCCESSFULLY"), this.router.navigate(['/get'], {replaceUrl:true});
    }
  }

}
