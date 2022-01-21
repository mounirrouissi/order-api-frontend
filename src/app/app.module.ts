import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { ClientsDashboardComponent } from './components/clients-dashboard/clients-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ProductsComponent,
    HomeComponent,
    ClientsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }
