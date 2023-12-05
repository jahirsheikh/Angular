import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";



@Component({
    templateUrl: "cartDetail.component.html"

    //  template: `<div><h3 class="bg-info p-1 text-white">Cart Detail Component</h3></div>`
})
export class CartDetailComponent {

    constructor(public cart: Cart) { }

}