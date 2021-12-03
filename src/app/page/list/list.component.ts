import { SweetAlertIcon } from 'sweetalert2';
import Swal from 'sweetalert2';

import { Serie } from './../../interfaces/miIndicadorCurrent.interface';
import { MindIndicadorService } from './../../services/mind-indicador.service';
import { DataLineGraph } from './../../interfaces/dataLineGraph.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  constructor(private mindIndicadorService:MindIndicadorService) { }

  listCurrency:string[] = [ 'uf','ivp','dolar','dolar_intercambio','euro','ipc' ]

  ngOnInit(): void {

  }

  name:string = '';
  series:Serie[] = [];

  dataLineGraph:DataLineGraph;


  selectCurrency(item:string){
    this.mindIndicadorService.showFinancialIndicators(item).subscribe( res => {
      const { nombre, serie } = res;
      this.showToast(
        'Informacion obtenida',
        '',
        'success',
        500
      )
      this.name = nombre;
      this.series = [...serie.slice(serie.length-10, serie.length)];
    })
  }

  showToast(
		title: string,
		detai: string,
		icon: SweetAlertIcon,
		timeOut: number = 2000
	) {
		Swal.fire(title, detai, icon);
		setInterval(() => {
			Swal.close();
		}, timeOut);
	}


}
