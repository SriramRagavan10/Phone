import { Component } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-delete',
  templateUrl: './phone-delete.component.html',
  styleUrl: './phone-delete.component.css'
})
export class PhoneDeleteComponent {

  phones:Phone[];

  constructor(private phoneService:PhoneService, private router:Router) {}

  delete() {
    this.phoneService.deleteByRating().subscribe();
      window.alert("Deleted Successfully");
      this.router.navigate(['/get'], { replaceUrl: false });
  }

}
