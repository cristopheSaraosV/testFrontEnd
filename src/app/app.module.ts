import { HomeComponent } from './page/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GraphComponent } from './page/graph/graph.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GraphCardComponent } from './components/graph-card/graph-card.component';
import { MsgAlertComponent } from './components/msg-alert/msg-alert.component';
import { HttpClientModule } from "@angular/common/http";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraphComponent,
    NavbarComponent,
    GraphCardComponent,
    MsgAlertComponent,
  ],
  imports: [
    NgxChartsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forChild()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
