import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.scss']
})
export class Service1Component implements OnInit {

  constructor(private _servie: MessageServiceService) { }
  name: any =  "Hello"
  ngOnInit(): void {
    this.name = this._servie.name
  }
messagealert()
{
  this._servie.messagealert()
}
}
