import { Serie } from './../../interfaces/miIndicadorCurrent.interface';
import { Component, OnInit, Input } from '@angular/core';
import { MindIndicadorService } from 'src/app/services/mind-indicador.service';

@Component({
  selector: 'app-list-currency',
  templateUrl: './list-currency.component.html',
  styleUrls: ['./list-currency.component.css']
})
export class ListCurrencyComponent implements OnInit {

  constructor(private mindIndicador:MindIndicadorService) { }


  @Input('currency')currency! : string;

  name:string = '';
  series:Serie[] = [];

  ngOnInit(): void {
    this.mindIndicador.showFinancialIndicators('uf').subscribe( res => {

      const { nombre, serie } = res;
      this.name = nombre;
      this.series = serie.slice(serie.length-10, serie.length);

    })
  }




}
