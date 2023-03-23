import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: any[] = [];

  getAllCategories(): Category[] {
    return this.categories;
  }

  getCategoryById(id: number): Category | undefined {
    return this.categories.find((category) => category.id === id);
  }

  addCategory(category: Category): void {
    this.categories.push(category);
  }

  updateCategory(category: Category): void {
    const index = this.categories.findIndex((c) => c.id === category.cod);
    if (index !== -1) {
      this.categories[index] = category;
    }
  }

  deleteCategory(id: number): void {
    this.categories = this.categories.filter((category) => category.id !== id);
  }
}
