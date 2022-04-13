import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { FormComponent } from './form/form.component';
import { QuotesComponent } from './quotes/quotes.component';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './QUOTES/src/app/quotes/details/details.component';
import { LogoComponent } from './logo/logo.component';
import { QuoteDetailComponent } from './QUOTES/src/app/quotes-folder/quote-detail/quote-detail.component';
import { QuoteFormComponent } from './QUOTES/src/app/quotes-folder/quote-form/quote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    FormComponent,
    QuotesComponent,
    MainComponent,
    DetailsComponent,
    LogoComponent,
    QuoteDetailComponent,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
