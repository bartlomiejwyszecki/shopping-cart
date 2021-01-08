import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Order } from "./data/entities";

@Component({
    selector: "header",
    templateUrl: "./header.component.html",
    styles: [' header { background-color: white; color: black; } .btn { background-color: #018ABE; border-color: #018ABE; } .btn:hover { background-color: #6298BC; border-color: #6298BC; }']
})
export class Header {

    @Input() order!: Order;

    @Output() submit = new EventEmitter<void>();

    get headerText(): string {
        let count = this.order.productCount;
        return count === 0 ? '(brak produktów)' : 
            `Liczba produktów: ${ count }, ${ this.order.total.toFixed(2)} zł`
    }
}