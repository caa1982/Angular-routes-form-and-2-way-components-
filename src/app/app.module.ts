import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MySignupFormComponent } from './my-signup-form/my-signup-form.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteItemsComponent } from './quote-items/quote-items.component';

import { Routes, RouterModule } from '@angular/router';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home/:id',  component: MyHomeComponent },
  { path: 'home',  component: MyHomeComponent },
  { path: 'about', component: MyAboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MySignupFormComponent,
    QuoteComponent,
    QuoteItemsComponent,
    MyHomeComponent,
    MyAboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes) //  <!-- "routes" is the array defined above
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
