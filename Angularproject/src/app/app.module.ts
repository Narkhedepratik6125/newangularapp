import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestdirectiveDirective } from './testdirective.directive';
import { SimpalfromComponent } from './simpalfrom/simpalfrom.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    TestdirectiveDirective,
    SimpalfromComponent,
    NgforComponent,
    NgswitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
