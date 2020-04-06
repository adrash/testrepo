import { Component, OnInit } from '@angular/core';
import { ValuesendService } from '../valuesend.service';

@Component({
  selector: 'app-new1',
  templateUrl: './new1.component.html',
  styleUrls: ['./new1.component.scss']
})
export class New1Component implements OnInit {
  name: string = "adarsh";
  constructor(private _service: ValuesendService) {
    this._service.name.subscribe(uname =>{
      this.name = uname
    })
   }

  ngOnInit(): void {
  }
  clickbutton(uname)
  {
   // this.name = uname.value
   this._service.name.next(uname.value)
  }
}
