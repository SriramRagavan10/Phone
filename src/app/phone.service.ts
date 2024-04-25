import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phone } from './phone';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private httpclient: HttpClient) { }
  postPhone(phone:Phone) {
    this.httpclient.post<Phone> (
      "http://localhost:2000/insert",phone).subscribe(x=>window.alert("POSTED SUCCESSFULLY"))
  }

  getPhone():Observable<Phone[]> {
    return this.httpclient.get<Phone[]> (
      "http://localhost:2000/getAll"
    )
  }

  getMiddle():Observable<Phone[]> {
    return this.httpclient.get<Phone[]> (
      "http://localhost:2000/middle"
    )
  }
  getBlack():Observable<Phone[]> {
    return this.httpclient.get<Phone[]> (
      "http://localhost:2000/color"
    )
  }

  getTwo():Observable<Phone[]> {
    return this.httpclient.get<Phone[]> (
      "http://localhost:2000/lasttwo"
    )
  }
  
  getDup():Observable<Phone[]> {
    return this.httpclient.get<Phone[]> (
      "http://localhost:2000/duplicate"
    )
  }
  getDesc():Observable<Phone[]> {
    return this.httpclient.get<Phone[]> (
      "http://localhost:2000/desc"
    )
  }

  patchColor(newColor: string) {
    this.httpclient.patch<Phone> (
      "http://localhost:2000/patch", {color : newColor}
    ).subscribe(x=>window.alert("UPDATED SUCCESSFULLY"))
  }

  PrimeIds(): Observable<Phone[]> {
    return this.httpclient.get<Phone[]>("http://localhost:2000/getAll").pipe(
      map(x => x.filter(y => this.isPrime(y.id)))
    );
  }

  private isPrime(a: number): boolean {
    if (a <= 1) {
      return false;
    }
    for (let i = 2; i < a; i++) {
      if (a % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  postPhonePrice(phone:Phone) {
    this.httpclient.post<Phone> (
      "http://localhost:2000/price",phone).subscribe(x=>{
        if (phone.price < 70000) {
          window.alert("The price is below 70000");
        } else {
          window.alert("POSTED SUCCESSFULLY");
        }
      });
  }

  updateByRating(): Observable<Phone[]> {
    return this.httpclient.get<Phone[]>("http://localhost:2000/getAll").pipe(
      map(x => {
         x.forEach(y=> 
        {
          if(y.rating>7) {
            y.price *= 1.1;
            this.httpclient.post("http://localhost:2000/insert", Phone).subscribe();
          }
        });
        return x;
      })
    );
  }

  postPhoneByRating(phone:Phone) {
    this.httpclient.post<Phone> (
      "http://localhost:2000/rating",phone).subscribe();
  }

  postPhoneByBrand(phone:Phone) {
    this.httpclient.post<Phone> (
      "http://localhost:2000/brand",phone).subscribe(x=> alert("Saved"))
  }

  deleteByRating() {
    return this.httpclient.delete<Phone[]>(
      "http://localhost:2000/delete"
    );
  }

}
