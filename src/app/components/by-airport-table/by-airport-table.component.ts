import { Component, OnInit, Input } from '@angular/core';
import { AirportData } from 'src/app/models/AirportData';

@Component({
	selector: 'app-by-airport-table',
	templateUrl: './by-airport-table.component.html',
	styleUrls: ['./by-airport-table.component.scss']
})
export class ByAirportTableComponent implements OnInit {

	@Input() byAirportData: AirportData[];
	@Input() firstRowHighlight: number;

	constructor() { }

	ngOnInit(): void {
	}

}
