import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProductsService } from './product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaginationModule.forRoot()
  ],
  providers: [ ProductsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
