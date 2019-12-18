import { Component, Inject } from "@angular/core";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { SharedState, MODES, SHARED_STATE } from "./sharedState.model";
import { NgForm } from '@angular/forms';
import { Observable } from "rxjs";
import { e } from "@angular/core/src/render3";
import { filter, map, distinctUntilChanged } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'paForm',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent {
  product: Product = new Product();
  //lastId: number;

  constructor(private model: Model,
    activeRoute: ActivatedRoute,
    private router: Router) {
    activeRoute.params.subscribe(params => {
      this.editing = params["mode"] == 'edit';
      let id = params["id"];

      if(id != null){
        Object.assign(this.product, model.getProduct(id) || new Product())
      }
    })
  }


  editing: boolean = false;

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.router.navigateByUrl("/");
    }
  }

  resetForm() {
    this.product = new Product();
  }

  // ngDoCheck() {
  //   if(this.lastId != this.state.id){
  //     this.product = new Product();
  //     if(this.state.mode == MODES.EDIT){
  //       Object.assign(this.product, this.model.getProduct(this.state.id))
  //     }
  //     this.lastId = this.state.id;
  //   }
  // }
}
