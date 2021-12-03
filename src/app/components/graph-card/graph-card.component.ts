import { Serie } from './../../interfaces/miIndicadorCurrent.interface';
import { DataLineGraph, Series } from './../../interfaces/dataLineGraph.interface';
import { MindIndicadorService } from './../../services/mind-indicador.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-graph-card',
  templateUrl: './graph-card.component.html',
  styleUrls: ['./graph-card.component.css']
})
export class GraphCardComponent implements OnInit {


  constructor(private mindIndicadorService: MindIndicadorService){}



  data:DataLineGraph[];
  codigo:string="";
  title:string="";
  currencyText:string="";
  subtitle:string="";
  series:Series[] = []
  LatestTenSeries:Serie[];

  @Input('currency')currency! : string;

  ngOnInit(): void {
    this.getData(this.currency);
  }



  colorScheme = {
    domain: ['#08DDC1']
  };



  getData(current:string){
    this.mindIndicadorService.showFinancialIndicators(current).subscribe( res => {
      const { nombre, serie,unidad_medida,codigo } = res
      this.subtitle = 'en '+unidad_medida + ' al '+ moment.utc(res.serie[res.serie.length-1].fecha).format('MM/DD/YYYY')
      this.title = nombre;
      this.codigo = codigo
      this.currencyText= unidad_medida;
      this.LatestTenSeries = serie.splice(serie.length-10,serie.length);

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
