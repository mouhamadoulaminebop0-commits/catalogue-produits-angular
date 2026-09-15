import { Service } from '@angular/core';
import { Product } from '../models/product.model';
import { PRODUCTS } from '../data/products-data';

@Service()
export class ProductService {
  private products: Product[] = PRODUCTS;

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getCategories(): string[] {
    return [...new Set(this.products.map(p => p.category))];
  }

  getByCategory(category: string): Product[] {
    return this.products.filter(p => p.category === category);
  }
}