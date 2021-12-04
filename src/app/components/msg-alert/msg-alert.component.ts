import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg-alert',
  templateUrl: './msg-alert.component.html',
  styleUrls: ['./msg-alert.component.css']
})
export class MsgAlertComponent implements OnInit {

  constructor() { }
  @Input('title') title :string = '';
  @Input('detail') detail :string = '';
  @Input('img') img :string = '';

  ngOnInit(): void {
  }

}
