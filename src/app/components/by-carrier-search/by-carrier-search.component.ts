import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarrierData } from 'src/app/models/CarrierData';

@Component({
	selector: 'app-by-carrier-search',
	templateUrl: './by-carrier-search.component.html',
	styleUrls: ['./by-carrier-search.component.scss']
})
export class ByCarrierSearchComponent implements OnInit {

	searchedCarrier: string;
	tooltipNames: string[];

	@Input() byCarrierData: CarrierData[];
	@Output() onSearch: EventEmitter<string> = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}

	search(): void {
		this.tooltipNames = [];
		this.onSearch.emit(this.searchedCarrier);
	}

	changeTooltip(): void {
		this.tooltipNames = [];
		const tableWithThisCarrier = this.byCarrierData.filter(el => el.przewoznik.toLowerCase().search(this.searchedCarrier.toLowerCase()) != -1);
		tableWithThisCarrier.forEach(carrier => {
			this.tooltipNames.push(carrier.przewoznik);
		});
	}

	changeName(name: string): void {
		this.tooltipNames = [];
		this.searchedCarrier = name;
	}
}
