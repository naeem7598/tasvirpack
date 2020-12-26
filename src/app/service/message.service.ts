import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  static subject = null;
  constructor() {
    if (!MessageService.subject) {
      MessageService.subject = new BehaviorSubject<any>({});
    }
  }

  get_message() {
    return MessageService.subject.asObservable();
  }

  set_message(message) {
    MessageService.subject.next(message);
  }
}
