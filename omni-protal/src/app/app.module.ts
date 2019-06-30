import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppMaterialModule } from './material.module';
import { SearchboxComponent } from './searchbox/searchbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchboxComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
