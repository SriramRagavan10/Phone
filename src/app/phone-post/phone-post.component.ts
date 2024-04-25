import { Component } from '@angular/core';
import { PhoneService } from '../phone.service';
import { Router } from '@angular/router';
import { Phone } from '../phone';

@Component({
  selector: 'app-phone-post',
  templateUrl: './phone-post.component.html',
  styleUrl: './phone-post.component.css'
})
export class PhonePostComponent {
  phones:Phone=new Phone();
  constructor(private phoneService:PhoneService, private router: Router) {}
  savePhone() {
    this.phoneService.postPhone(this.phones);
    window.alert("POSTED SUCCESSFULLY")
    this.router.navigate(['/get'], { replaceUrl:false })
  }

}
