import { Component, OnInit } from '@angular/core';
import { MessageService } from '../child/service/message.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
clickAlert()
{
  const x = new MessageService()
  x.alertMessage()
}
}

