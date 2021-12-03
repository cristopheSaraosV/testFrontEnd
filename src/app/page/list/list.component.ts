import { Serie } from './../../interfaces/miIndicadorCurrent.interface';
import { MindIndicadorService } from './../../services/mind-indicador.service';
import { DataLineGraph } from './../../interfaces/dataLineGraph.interface';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

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
      this.name = nombre;
      this.series = [...serie.slice(serie.length-10, serie.length)];
    })
  }


}
