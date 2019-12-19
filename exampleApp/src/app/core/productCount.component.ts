import { Component, KeyValueDiffers, KeyValueDiffer, ChangeDetectorRef } from "@angular/core";
import { Model } from "../model/repository.model";
import { ActivatedRoute } from "@angular/router";
import { p } from "@angular/core/src/render3";

@Component({
    selector: "paProductCount",
    template: `<div class="bg-info text-white p-2">There are
    {{count}} products
    </div>`
})
export class ProductCountComponent {
    private differ: KeyValueDiffer<any, any>;
    count: number = 0;
    category: any;

    constructor(private model: Model,
        private keyValueDiffers: KeyValueDiffers,
        private changeDetector: ChangeDetectorRef,
        activeRoute: ActivatedRoute) {

        activeRoute.pathFromRoot.forEach(route => {
            route.params.subscribe(params => {
                if(params["category"] != null){
                    this.category = params["category"];
                    this.updateCount();
                }
            });
        })

    }

    ngOnInit() {
        this.differ = this.keyValueDiffers
            .find(this.model.getProducts())
            .create();
    }

    ngDoCheck() {
        if (this.differ.diff(this.model.getProducts()) != null) {
            this.updateCount();
        }
    }
    
    private updateCount() {
        this.count = this.model.getProducts()
        .filter(p => this.category == null || p.category == this.category)
        .length;
    }
}