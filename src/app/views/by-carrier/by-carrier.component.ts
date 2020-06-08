import { Component, OnInit } from '@angular/core';
import { CarrierData } from 'src/app/models/CarrierData';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-by-carrier',
	templateUrl: './by-carrier.component.html',
	styleUrls: ['./by-carrier.component.scss']
})
export class ByCarrierComponent implements OnInit {

	byCarrierData: CarrierData[];
	activeTab: number;
	carrierFiltered: number;
	carrierOnTop: CarrierData;

	constructor(
		private dataService: DataService
	) { }

	ngOnInit(): void {
		this.activeTab = 0;
		this.carrierFiltered = 0;
		this.dataService.getCarrierData().subscribe(data => this.byCarrierData = data);
	}

	changeTab(tabIndex: number): void {
		this.activeTab = tabIndex;
	}

	async getCarrierOnTop(carrierName: string): Promise<void> {

		this.dataService.getCarrierData().subscribe(data => {
			if (carrierName != '') {
				this.byCarrierData = data;

				const tableWithoutThisCarrier = this.byCarrierData.filter(el => el.przewoznik.toLowerCase().search(carrierName.toLowerCase()) == -1);
				const tableWithThisCarrier = this.byCarrierData.filter(el => el.przewoznik.toLowerCase().search(carrierName.toLowerCase()) != -1);

				if (tableWithThisCarrier.length === 1) {
					tableWithoutThisCarrier.unshift(tableWithThisCarrier[0]);
					this.byCarrierData = tableWithoutThisCarrier;
					this.carrierOnTop = tableWithThisCarrier[0];
					this.carrierFiltered = 1;
				} else if (tableWithThisCarrier.length > 1) {
					tableWithThisCarrier.forEach(el => {
						tableWithoutThisCarrier.unshift(el);
					});
					this.carrierOnTop = tableWithThisCarrier[tableWithThisCarrier.length - 1];
					this.carrierFiltered = tableWithThisCarrier.length;
					this.byCarrierData = tableWithoutThisCarrier;
				} else {
					this.carrierFiltered = 0;
				}
			}
		});
	}

}
