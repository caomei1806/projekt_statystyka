import { Component, OnInit } from '@angular/core';
import { AirportData } from 'src/app/models/AirportData';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-by-airport',
	templateUrl: './by-airport.component.html',
	styleUrls: ['./by-airport.component.scss']
})
export class ByAirportComponent implements OnInit {

	byAirportData: AirportData[];
	activeTab: number;
	airportFiltered: number;

	constructor(
		private dataService: DataService
	) { }

	ngOnInit(): void {
		this.activeTab = 0;
		this.airportFiltered = 0;
		this.dataService.getAirportsData().subscribe(data => this.byAirportData = data);
	}

	changeTab(tabIndex: number): void {
		this.activeTab = tabIndex;
	}

	async getAirportOnTop(airportName: string): Promise<void> {

		this.dataService.getAirportsData().subscribe(data => {
			if (airportName != '') {
				this.byAirportData = data;

				const tableWithoutThisAirport = this.byAirportData.filter(el => el.airport.toLowerCase().search(airportName.toLowerCase()) == -1);
				const tableWithThisAirport = this.byAirportData.filter(el => el.airport.toLowerCase().search(airportName.toLowerCase()) != -1);

				if (tableWithThisAirport.length === 1) {
					tableWithoutThisAirport.unshift(tableWithThisAirport[0]);
					this.byAirportData = tableWithoutThisAirport;
					this.airportFiltered = 1;
				} else if (tableWithThisAirport.length > 1) {
					tableWithThisAirport.forEach(el => {
						tableWithoutThisAirport.unshift(el);
					});
					this.airportFiltered = tableWithThisAirport.length;
					this.byAirportData = tableWithoutThisAirport;
				} else {
					this.airportFiltered = 0;
				}
			}
		});
	}

}
