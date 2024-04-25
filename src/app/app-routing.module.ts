import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { PhoneRatingComponent } from './phone-rating/phone-rating.component';
import { PhoneBrandComponent } from './phone-brand/phone-brand.component';
import { PhoneDeleteComponent } from './phone-delete/phone-delete.component';
import { PhonePriceUpdateComponent } from './phone-price-update/phone-price-update.component';

const routes: Routes = [
  { path: "post", component: PhonePostComponent },
  { path: "get", component: PhoneGetComponent },
  { path: "mid", component: PhoneMidComponent },
  { path: "black", component: PhoneBlackComponent },
  { path: "lasttwo", component: PhoneLastTwoComponent },
  { path: "duplicate", component: PhoneDuplicateComponent },
  { path: "descending", component: PhoneDescendingComponent },
  { path: "changecolor", component: PhoneChangeColorComponent },
  { path: "prime", component: PhonePrimeComponent },
  { path: "price", component: PhonePriceComponent },
  { path: "rating", component: PhoneRatingComponent },
  { path: "brand", component: PhoneBrandComponent },
  { path: "delete", component: PhoneDeleteComponent},
  {path : "update", component: PhonePriceUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
