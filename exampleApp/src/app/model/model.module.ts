import { NgModule } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { Model } from "./repository.model";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { RestDataSource, REST_URL } from "./rest.datasourse";
import { ModelResolver } from "./model.resolver";

@NgModule({
  imports: [HttpClientModule, HttpClientJsonpModule],
  providers: [Model, RestDataSource, ModelResolver, 
     { provide: REST_URL, useValue: `http://${location.hostname}:3500/products`
  }]
})
export class ModelModule {}
