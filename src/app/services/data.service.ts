import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirportData } from '../models/AirportData';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor() { }

	getAirportsData(): Observable<AirportData[]> {
		return new Observable(subscriber => {
			fetch('/assets/dane_wdl_portu_lotniczego.json').then(res => res.json()).then(data => {
				subscriber.next(data);
			});
		});
	}
}
