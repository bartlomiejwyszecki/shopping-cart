import { Component } from "@angular/core";
import { DataSource } from "./data/dataSource";
import { Product } from "./data/entities";
import { Router } from "@angular/router";

@Component({
    selector: "product-list",
    templateUrl: "./productList.component.html"
})
export class ProductList {
    selectedCategory = "Wszystkie";

    constructor(public dataSource: DataSource, private router: Router) {}

    get products(): Product[] {
        return this.dataSource.getProducts("id", this.selectedCategory === "Wszystkie" ?
            undefined : this.selectedCategory);
    }

    get categories(): string[] {
        return ["Wszystkie", ...this.dataSource.getCategories()];
    }

    handleCategorySelect(category: string) {
        this.selectedCategory = category;
    }

    handleAdd(data: {product: Product, quantity: number }) {
        this.dataSource.order.addProduct(data.product, data.quantity);
    }

    handleSubmit() {
        this.router.navigateByUrl("/order");
    }
}

