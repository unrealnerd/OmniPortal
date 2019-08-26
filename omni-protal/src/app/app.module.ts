import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppMaterialModule } from './material.module';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { CardholderComponent } from './cardholder/cardholder.component';
import { CardQuoteComponent } from './card-quote/card-quote.component';
import { CardHolderDirective } from './cardholder/cardholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchboxComponent,
    CardholderComponent,
    CardQuoteComponent,
    CardHolderDirective
  ],
  imports: [
    HttpClientModule, BrowserModule, BrowserAnimationsModule, AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CardQuoteComponent]
})
export class AppModule { }
