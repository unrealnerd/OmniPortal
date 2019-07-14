import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppMaterialModule } from './material.module';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { CardholderComponent } from './cardholder/cardholder.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchboxComponent,
    CardholderComponent    
  ],
  imports: [
    HttpClientModule, BrowserModule, BrowserAnimationsModule, AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
