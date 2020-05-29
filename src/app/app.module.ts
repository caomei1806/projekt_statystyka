import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SwitchBarComponent } from './components/switch-bar/switch-bar.component';
import { AirportDataAnalysisComponent } from './components/airport-data-analysis/airport-data-analysis.component';
import { AirportDataSearchBarComponent } from './components/airport-data-search-bar/airport-data-search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SwitchBarComponent,
    AirportDataAnalysisComponent,
    AirportDataSearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
