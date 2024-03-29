import { SharedState, MODES, SHARED_STATE } from "./sharedState.model";
import { Model } from "../model/repository.model";
import { Product } from "../model/product.model";
import { Component, Inject } from "@angular/core";
import { Observer } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { HighlightTrigger } from "./table.animations";


@Component({
  selector: "paTable",
  templateUrl: "table.component.html",
  animations: [HighlightTrigger]
})
export class TableComponent {
  category: any;

  constructor(private model: Model,
    activeRoute: ActivatedRoute) {
      activeRoute.params.subscribe(params => {
        this.category = params["category"] || null;
      });
    }
  
  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts()
      .filter(p => this.category == null || p.category == this.category);
  }

  get categories(): string[] {
    return this.model.getProducts()
      .map(p => p.category)
      .filter((category, index, array) => {
        return array.indexOf(category) == index;
      })
  }

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }
  
  highlightCategory: string = '';

  getRowState(category: string): string {
    return this.highlightCategory == '' ? ''
      : this.highlightCategory == category ? "selected"
        : 'notselected'
  }
1
}
