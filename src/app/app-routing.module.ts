import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsDashboardComponent } from './components/clients-dashboard/clients-dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"clients",component:ClientsComponent},
  {path:"clients/add",component:ClientsDashboardComponent},
  {path:"products",component:ProductsComponent},
  {path:"products/:id",component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
