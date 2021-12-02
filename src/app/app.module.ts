import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { GraphComponent } from './page/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraphComponent
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
