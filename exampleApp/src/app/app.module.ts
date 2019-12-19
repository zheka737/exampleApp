import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//import { AppComponent } from './app.component';
import { ModelModule } from "./model/model.module";
import { CoreModule } from "./core/core.module";
import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";
import { MessageModule } from "./messages/message.module";
import { MessageComponent } from "./messages/message.component";
import { routing } from "./app.routing";
import { AppComponent } from "./app.component";
import { TermsGuard } from "./terms.guard";
import { LoadGuard } from "./load.guard";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  imports: [BrowserModule, ModelModule, CoreModule,
    MessageModule, routing, BrowserAnimationsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [TermsGuard, LoadGuard]
})
export class AppModule { }
