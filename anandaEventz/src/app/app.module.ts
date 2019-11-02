import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SliderpageComponent } from './components/sliderpage/sliderpage.component';
import { SliderModule } from 'angular-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    SliderModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
