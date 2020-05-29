import { Component, OnInit, Input } from '@angular/core';
import { AirportData } from 'src/app/models/AirportData';

declare var Chart: any;

@Component({
	selector: 'app-by-airport-chart',
	templateUrl: './by-airport-chart.component.html',
	styleUrls: ['./by-airport-chart.component.scss']
})
export class ByAirportChartComponent implements OnInit {

	@Input() byAirportData: AirportData[];

	constructor() { }

	ngOnInit(): void {
	}

	ngOnChanges(): void {
		this.drawChart();
	}

	drawChart(): void {
		let ctx = document.getElementById('byAirportChart');
		var myChart = new Chart(ctx, {
			type: 'line',
			data: this.parseData(this.byAirportData),
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

	parseData(data: AirportData[]): object {

		if (data) {
			let labels = [];

			let DSlo2017 = {
				label: 'Liczba odlotów - 2017',
				data: []
			};
			let DSlo2018 = {
				label: 'lo2017',
				data: []
			};
			let DSlo2019 = {
				label: 'lo2017',
				data: []
			};
			let DSlp2017 = {
				label: 'lo2017',
				data: []
			};
			let DSlp2018 = {
				label: 'lo2017',
				data: []
			};
			let DSlp2019 = {
				label: 'lo2017',
				data: []
			};

			data.forEach(airport => {
				labels.push(airport.airport);
				DSlo2017.data.push(airport.lo2017);
				DSlo2018.data.push(airport.lo2018);
				DSlo2019.data.push(airport.lo2019);
				DSlp2017.data.push(airport.lp2017);
				DSlp2018.data.push(airport.lp2018);
				DSlp2019.data.push(airport.lp2019);
			});

			return {
				labels,
				datasets: [
					DSlo2017,
					DSlo2018,
					DSlo2019,
					DSlp2017,
					DSlp2018,
					DSlp2019
				]
			};
		} else {
			return {};
		}
	}

}
