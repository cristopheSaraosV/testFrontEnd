import { SweetAlertIcon } from 'sweetalert2';
import Swal from 'sweetalert2';

import { Serie } from './../../interfaces/miIndicadorCurrent.interface';
import { MindIndicadorService } from './../../services/mind-indicador.service';
import { DataLineGraph } from './../../interfaces/dataLineGraph.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [ `
     .text-orange{
      color: rgb(243, 136, 14);


    }
    .alert-orange{
      color:#fff;
      background:#F3880D
    }

    .table-hover tr:hover{
  background-color: orange !important ;
  cursor: pointer;

}

  `
  ]
})
export class ListComponent implements OnInit {

  constructor(private mindIndicadorService:MindIndicadorService) { }

  listCurrency:string[] = [ 'uf','ivp','dolar','dolar_intercambio','euro','ipc' ]
  // TODO: Tomar en cuenta la posicion para los respectivos iconos
  listCurrencyIcon:string[] = [
    'bi bi-exclamation-diamond-fill',
    'bi bi-exclamation-diamond-fill',
    'bi bi-currency-dollar',
    'b bi-currency-exchange',
    'bi bi-currency-euro',
    'bi bi-exclamation-diamond-fill'
   ]

  ngOnInit(): void {

  }

  name:string = '';
  series:Serie[] = [];

  dataLineGraph:DataLineGraph;

  toggle = true;
  status = 'Enable';



  selectCurrency(item:string){
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
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
