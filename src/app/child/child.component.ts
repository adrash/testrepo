import { Component, OnInit } from '@angular/core';
import { MessageService } from './service/message.service'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  buttonclick(){
    const a = new MessageService()
    a.alertMessage()
  }
}
