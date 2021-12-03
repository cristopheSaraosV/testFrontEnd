import { Series } from './../../interfaces/dataLineGraph.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
  }


  listCurrency:string[] = [ 'uf','ivp','dolar','dolar_intercambio','euro','ipc' ]



}

