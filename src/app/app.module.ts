import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { GraphComponent } from './page/graph/graph.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GraphCardComponent } from './components/graph-card/graph-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraphComponent,
    NavbarComponent,
    GraphCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forChild(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
