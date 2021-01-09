import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "./data/entities";

export type productSelection = {
    product: Product,
    quantity: number
}

@Component({
    selector: "product-item",
    templateUrl: "./productItem.component.html",
    styles: ['div { border-color: white; } span { background-color: #018ABE; } span:hover { background-color: #97CADB }  .btn { background-color: grey; border-color: grey; } .btn:hover { background-color: black; border-color: black; color: white; border-width: 2px; font-size: 0.85em; } .btn:target { background-color: pink; }']
})
export class ProductItem {
    quantity: number = 1;

    @Input()
    product!: Product;

    @Output()
    addToCart = new EventEmitter<productSelection>();

    handleAddToCart() {
        this.addToCart.emit({ product: this.product,
            quantity: Number(this.quantity) });
    }
}