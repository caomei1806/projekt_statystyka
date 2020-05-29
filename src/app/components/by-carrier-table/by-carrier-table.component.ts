import { Component, OnInit, Input } from '@angular/core';
import { CarrierData } from 'src/app/models/CarrierData';

@Component({
	selector: 'app-by-carrier-table',
	templateUrl: './by-carrier-table.component.html',
	styleUrls: ['./by-carrier-table.component.scss']
})
export class ByCarrierTableComponent implements OnInit {

	@Input() byCarrierData: CarrierData[];
	@Input() firstRowHighlight: number;

	constructor() { }

	ngOnInit(): void {
	}

}
