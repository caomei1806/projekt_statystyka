import { Component, OnInit, Input } from '@angular/core';
import { CarrierData } from 'src/app/models/CarrierData';

declare var Chart: any;

@Component({
	selector: 'app-by-carrier-chart',
	templateUrl: './by-carrier-chart.component.html',
	styleUrls: ['./by-carrier-chart.component.scss']
})
export class ByCarrierChartComponent implements OnInit {

	@Input() byCarrierData: CarrierData[];

	constructor() { }

	ngOnInit(): void {
	}

	ngOnChanges(): void {
		this.drawChart();
	}

	drawChart(): void {
		let ctx = document.getElementById('byCarrierChart');
		var myChart = new Chart(ctx, {
			type: 'line',
			data: this.parseData(this.byCarrierData),
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				}
			}
		});
	}

	parseData(data: CarrierData[]): object {

		if (data) {
			let labels = [];

			let liczba_pasazerow_2018 = {
				label: 'Liczba Pasażerow 2018',
				data: []
			};

			let liczba_pasazerow_2019 = {
				label: 'Liczba Pasażerow 2019',
				data: []
			};

			data.forEach(carrier => {
				labels.push(carrier.przewoznik);
				liczba_pasazerow_2018.data.push(carrier.liczba_pasazerow_2018);
				liczba_pasazerow_2019.data.push(carrier.liczba_pasazerow_2019);
			});

			return {
				labels,
				datasets: [
					liczba_pasazerow_2018,
					liczba_pasazerow_2019
				]
			};
		} else {
			return {};
		}
	}

}
