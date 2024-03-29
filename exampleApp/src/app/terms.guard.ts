import { Injectable } from "@angular/core";
import { MessageService } from "./messages/message.service";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Message } from "./messages/message.model";


@Injectable()
export class TermsGuard {

    constructor(private messages: MessageService,
        private router: Router){
        }

    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Promise<boolean> | boolean {

        if(route.params['mode'] == 'create') {
            return new Promise<boolean>((resolve) => {
                let responses: [string, () => void][]
                    = [['Yes', () => resolve(true)], 
                    ['No', () => resolve(false)]];

                this.messages.reportMessage
                (new Message("Do you accept terms & conditions?",
                false, responses));
            });
        }
        else {
            return true;
        }
    }

    canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean> | boolean {
        
        if(route.url.length > 0 
            && route.url[route.url.length - 1].path == 'categories'){

            return new Promise<boolean>((resolve, reject) => {
                let responses: [string, (string) => void][] =
                [
                    ['Yes', () => resolve(true)],
                    ['No', () => resolve(false)]
                ];

                this.messages.reportMessage(
                    new Message
                    ('Do you want to se categories component?',
                    false, responses)
                );
            });
        }
        else {
            return true;
        }
        
    }
}