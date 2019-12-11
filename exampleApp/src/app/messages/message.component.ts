import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { MessageService } from "./message.service";
import { Component } from "@angular/core";


@Component({
  selector: "paMessages",
  templateUrl: "message.component.html"
})
export class MessageComponent {
  lastMessage: Message;

  constructor(messageService: MessageService) {
    messageService.messages.subscribe((m)=> {
      this.lastMessage = m
    })
  }
}
