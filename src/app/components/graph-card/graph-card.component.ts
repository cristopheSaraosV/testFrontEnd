import { DataLineGraph, Series } from './../../interfaces/dataLineGraph.interface';
import { MindIndicadorService } from './../../services/mind-indicador.service';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-graph-card',
  templateUrl: './graph-card.component.html',
  styleUrls: ['./graph-card.component.css']
})
export class GraphCardComponent implements OnInit {


  constructor(private mindIndicadorService: MindIndicadorService){}

  data:DataLineGraph[];

  title:string="";
  series:Series[] = []

  @Input('currency')currency! : string;

  ngOnInit(): void {
    this.getData(this.currency);
  }

  colorScheme = {
    domain: ['#08DDC1']
  };

  getData(current:string){
    this.mindIndicadorService.showFinancialIndicators(current).subscribe( res => {
      const { nombre, serie } = res

      this.title= nombre;
      this.series = serie.map( res => {
        return {
          name:  moment.utc(res.fecha).format('MM/DD/YYYY'),
          value: res.valor
        }
      })

      this.data = [
        {name:nombre, series: this.series}
      ]
    })
  }




}
