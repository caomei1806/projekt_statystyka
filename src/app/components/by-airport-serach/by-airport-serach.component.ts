import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AirportData } from 'src/app/models/AirportData';

@Component({
	selector: 'app-by-airport-serach',
	templateUrl: './by-airport-serach.component.html',
	styleUrls: ['./by-airport-serach.component.scss']
})
export class ByAirportSerachComponent implements OnInit {

	searchedAirport: string;
	tooltipNames: string[];

	@Input() byAirportData: AirportData[];
	@Output() onSearch: EventEmitter<string> = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}

	search(): void {
		this.tooltipNames = [];
		this.onSearch.emit(this.searchedAirport);
	}

	changeTooltip(): void {
		this.tooltipNames = [];
		const tableWithThisAirport = this.byAirportData.filter(el => el.airport.toLowerCase().search(this.searchedAirport.toLowerCase()) != -1);
		tableWithThisAirport.forEach(airport => {
			this.tooltipNames.push(airport.airport);
		});
	}

	changeName(name: string): void {
		this.tooltipNames = [];
		this.searchedAirport = name;
	}

}
