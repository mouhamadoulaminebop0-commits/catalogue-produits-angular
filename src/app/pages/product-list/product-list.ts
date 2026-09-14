import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  private productService = inject(ProductService);

  products: Product[] = [];
  categories: string[] = [];
  selectedCategory = 'Toutes';

  ngOnInit(): void {
    this.products = this.productService.getAll();
    this.categories = ['Toutes', ...this.productService.getCategories()];
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.products = category === 'Toutes'
      ? this.productService.getAll()
      : this.productService.getByCategory(category);
  }
}