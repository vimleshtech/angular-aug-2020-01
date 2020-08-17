import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private message = new BehaviorSubject('Default Message');
  sharedMessage = this.message.asObservable();

  constructor() { }

  getMessage(message: string){
    this.message.next(message)
  }
}
