import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MySignupFormComponent } from './my-signup-form/my-signup-form.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteItemsComponent } from './quote-items/quote-items.component';

@NgModule({
  declarations: [
    AppComponent,
    MySignupFormComponent,
    QuoteComponent,
    QuoteItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
