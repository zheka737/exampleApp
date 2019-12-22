import { Component, HostListener, Output, EventEmitter, Input } from "@angular/core";
import { Model } from "../model/repository.model";
import { Product } from "../model/product.model";
import { RestDataSource } from "../model/rest.datasourse";


@Component({
    selector: "first",
    templateUrl: 'first.component.html'
})
export class FirstComponent {
    _category: string = "Soccer";
    _products: Product[] = [];
    highlighted: boolean = false;

    constructor(private datasourse: RestDataSource) { }

    ngOnInit() {
        this.updateData();
    }

    getProducts(): Product[] {
        return this._products;
    }

    set category(newValue: string) {
        this._category = newValue;
        this.updateData();
    }

    updateData() {
        this.datasourse.getData().subscribe(data => {
            this._products = data
                .filter(p => p.category == this._category)
        });
    }
}
