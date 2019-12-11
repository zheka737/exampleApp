import { SharedState, MODES, SHARED_STATE } from "./sharedState.model";
import { Model } from "../model/repository.model";
import { Product } from "../model/product.model";
import { Component, Inject } from "@angular/core";
import { Observer } from "rxjs";


@Component({
  selector: "paTable",
  templateUrl: "table.component.html"
})
export class TableComponent {

  constructor(private model: Model, 
    @Inject(SHARED_STATE) private observer: Observer<SharedState>) {}
    
  editProduct(key: number) {
    this.observer.next(new SharedState(MODES.EDIT, key));
  }

  createProduct() {
    this.observer.next(new SharedState(MODES.CREATE));
  }
  
  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }

}
