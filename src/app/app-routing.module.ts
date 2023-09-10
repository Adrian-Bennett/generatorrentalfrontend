import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { CalloutComponent } from './callout/callout.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { SupplierComponent } from './supplier/supplier.component';
import { RentalsComponent } from './rentals/rentals.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'customer',component:CustomerComponent},
  {path: 'callout',component: CalloutComponent},
  {path: 'insurance',component: InsuranceComponent},
  {path: 'supplier',component: SupplierComponent},
  {path: 'rental',component: RentalsComponent},
  {path: 'product',component: ProductComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
