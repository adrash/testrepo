import { Component, OnInit } from '@angular/core';
import { ValuesendService } from '../valuesend.service';

@Component({
  selector: 'app-new4',
  templateUrl: './new4.component.html',
  styleUrls: ['./new4.component.scss']
})
export class New4Component implements OnInit {
  name: string = "adarsh";
  constructor( private _service: ValuesendService) {
    this._service.name.subscribe(uname =>
      this.name = uname)
   }

  ngOnInit(): void {
  }
  clickbutton(uname)
  {
   // this.name = uname.value
   this._service.name.next(uname.value)
  }
}
