import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";


@Injectable()
export class MessageService {
  private subject = new Subject<Message>();

  reportMessage(msg: Message) {
    this.subject.next(msg)
  }

  get messages(): Observable<Message> {
    return this.subject;
  }
}
