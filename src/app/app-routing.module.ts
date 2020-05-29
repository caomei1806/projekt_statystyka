import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ByAirportComponent } from './views/by-airport/by-airport.component';
import { ByCarrierComponent } from './views/by-carrier/by-carrier.component';
import { ByDestinationComponent } from './views/by-destination/by-destination.component';


const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'byAirport', component: ByAirportComponent },
	{ path: 'byCarrier', component: ByCarrierComponent },
	{ path: 'byDestination', component: ByDestinationComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
