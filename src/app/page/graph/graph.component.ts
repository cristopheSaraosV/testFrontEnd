import { MindicadorCurrent } from './../../interfaces/miIndicadorCurrent.interface';
import { MindIndicadorService } from './../../services/mind-indicador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(private mindIndicadorService: MindIndicadorService){}

  ngOnInit(): void {
  }

  listCurrency:string[] = [ 'uf','ivp','dolar','dolar_intercambio','euro','ipc' ]

  }

