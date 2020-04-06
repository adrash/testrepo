import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.scss']
})
export class Service2Component implements OnInit {

  constructor(private _service: MessageServiceService) { }

  ngOnInit(): void {
  }
 buttonname()
 {
   this._service.messagealert()
 }
}
