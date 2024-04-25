import { Component } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-change-color',
  templateUrl: './phone-change-color.component.html',
  styleUrl: './phone-change-color.component.css'
})
export class PhoneChangeColorComponent {
  
  phones:Phone=new Phone();
  constructor(private phoneService:PhoneService, private router: Router) {}
  updateColor() {
    this.phoneService.patchColor(this.phones.color),
    window.alert("UPDATE SUCCESSFULLY")
    this.router.navigate(['/get'], { replaceUrl:true })
  }

}
