import { menuItem } from './../../interfaces/menuItem.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  menuItem: menuItem[] = [];

  ngOnInit(): void {
    this.menuItem = [
      {
        label:'Inicio',
        route:'/',
        activeRoute:'active',
        class:'nav-link' ,
        iconClass:'bi bi-house',
      },
      {
        label:'Graficas',
        route:'/graph',
        activeRoute:'active',
        class:'nav-link ',
        iconClass:'bi bi-file-bar-graph' ,
      },
      { label:'Lista',
        route:'/list',
        activeRoute:'active',
        class:'nav-link ',
        iconClass:'bi bi-card-list',
      }
    ]
  }

}
