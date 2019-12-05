import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { Injectable } from "@angular/core";


@Injectable()
export class MessageService {
  private handler: (m: Message) => void;

  reportMessage(mgs: Message) {
    if(this.handler != null) {
      this.handler(mgs);
    }
  }

  registerMessageHandler(handler: (m: Message) => void) {
    this.handler = handler;
  }
}
