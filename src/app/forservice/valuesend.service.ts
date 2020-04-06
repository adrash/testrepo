import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ValuesendService {

  constructor() { }
  name = new Subject<any>();
}
