import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Pc ", "Category 1", "Product 1 (Category 1)", 900),
        new Product(2, "Monitor ", "Category 1", "Product 2 (Category 1)", 600),
        new Product(3, "Mobile", "Category 1", "Product 3 (Category 1)", 400),
        new Product(4, "Phone", "Category 1", "Product 4 (Category 1)", 900),
        new Product(5, "Mouse", "Category 1", "Product 5 (Category 1)", 20),
        new Product(6, "Keyboard", "Category 2", "Product 6 (Category 2)", 50),
        new Product(7, "Wifi connector", "Category 2", "Product 7 (Category 2)", 100),
        new Product(8, "Cable", "Category 2", "Product 8 (Category 2)", 100),
        new Product(9, "Product 9", "Category 2", "Product 9 (Category 2)", 100),
        new Product(10, "Product 10", "Category 2", "Product 10 (Category 2)", 100),
        new Product(11, "Product 11", "Category 3", "Product 11 (Category 3)", 100),
        new Product(12, "Product 12", "Category 3", "Product 12 (Category 3)", 100),
        new Product(13, "Product 13", "Category 3", "Product 13 (Category 3)", 100),
        new Product(14, "Linx Op", "Category 3", "Product 14 (Category 3)", 100),
        new Product(15, "Mac Windows", "Food", "Product 15 (food)", 300),

        new Product(16, "Iphone pro max", "Mobile", "Iphone pro max (Mobile)", 300),
        new Product(1, "Nothing", "Mobile", "Iphone pro max (Mobile)", 300),

    ];
    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }
}