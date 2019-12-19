import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { TableComponent } from "./table.component";
import { FormComponent } from "./form.component";
import { SharedState, SHARED_STATE, MODES } from "./sharedState.model";
import { Subject } from "rxjs";
import { StatePipe } from "./state.pipe";
import { MessageService } from "../messages/message.service";
import { Model } from "../model/repository.model";
import { Message } from "../messages/message.model";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from "./notFound.component";
import { ProductCountComponent } from "./productCount.component";
import { CategoryCountComponent } from "./categoryCount.component";
import { UnsavedGuard } from "./unsaved.guard";

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule, RouterModule],
  declarations: [TableComponent, FormComponent, StatePipe,
    ProductCountComponent, CategoryCountComponent, NotFoundComponent],
  exports: [ModelModule, TableComponent, FormComponent],
  providers: [UnsavedGuard]})
export class CoreModule {}
