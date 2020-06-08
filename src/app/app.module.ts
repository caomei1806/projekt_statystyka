import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SwitchBarComponent } from './components/switch-bar/switch-bar.component';
import { AirportDataAnalysisComponent } from './components/airport-data-analysis/airport-data-analysis.component';
import { ByAirportComponent } from './views/by-airport/by-airport.component';
import { ByCarrierComponent } from './views/by-carrier/by-carrier.component';
import { HomeComponent } from './views/home/home.component';
import { ByAirportTableComponent } from './components/by-airport-table/by-airport-table.component';
import { ByAirportSerachComponent } from './components/by-airport-serach/by-airport-serach.component';
import { ByAirportChartComponent } from './components/by-airport-chart/by-airport-chart.component';
import { ByCarrierTableComponent } from './components/by-carrier-table/by-carrier-table.component';
import { ByCarrierSearchComponent } from './components/by-carrier-search/by-carrier-search.component';
import { ByCarrierChartComponent } from './components/by-carrier-chart/by-carrier-chart.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		SwitchBarComponent,
		AirportDataAnalysisComponent,
		ByAirportComponent,
		ByCarrierComponent,
		HomeComponent,
		ByAirportTableComponent,
		ByAirportSerachComponent,
		ByAirportChartComponent,
		ByCarrierTableComponent,
		ByCarrierSearchComponent,
		ByCarrierChartComponent
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
