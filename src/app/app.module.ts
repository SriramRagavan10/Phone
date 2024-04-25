import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonePostComponent } from './phone-post/phone-post.component';
import { PhoneGetComponent } from './phone-get/phone-get.component';
import { PhoneMidComponent } from './phone-mid/phone-mid.component';
import { PhoneBlackComponent } from './phone-black/phone-black.component';
import { PhoneLastTwoComponent } from './phone-last-two/phone-last-two.component';
import { PhoneDuplicateComponent } from './phone-duplicate/phone-duplicate.component';
import { PhoneDescendingComponent } from './phone-descending/phone-descending.component';
import { PhoneChangeColorComponent } from './phone-change-color/phone-change-color.component';
import { PhonePrimeComponent } from './phone-prime/phone-prime.component';
import { PhonePriceComponent } from './phone-price/phone-price.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PhoneRatingComponent } from './phone-rating/phone-rating.component';
import { PhoneBrandComponent } from './phone-brand/phone-brand.component';
import { PhoneDeleteComponent } from './phone-delete/phone-delete.component';
import { PhonePriceUpdateComponent } from './phone-price-update/phone-price-update.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonePostComponent,
    PhoneGetComponent,
    PhoneMidComponent,
    PhoneBlackComponent,
    PhoneLastTwoComponent,
    PhoneDuplicateComponent,
    PhoneDescendingComponent,
    PhoneChangeColorComponent,
    PhonePrimeComponent,
    PhonePriceComponent,
    PhoneRatingComponent,
    PhoneBrandComponent,
    PhoneDeleteComponent,
    PhonePriceUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
