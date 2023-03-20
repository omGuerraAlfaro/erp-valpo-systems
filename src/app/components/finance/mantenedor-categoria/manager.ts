import { Category } from "src/app/interfaces/category";

class CategoryManager {
    private categories: Category[];
  
    constructor(data: Category[]) {
      this.categories = data;
    }
  
    public add(category: Category): void {
      if (this.get(category.id)) {
        throw new Error(`Category with ID ${category.id} already exists`);
      }
      this.categories.push(category);
    }
  
    public get(id: number): Category | undefined {
      const queue = [...this.categories];
      while (queue.length > 0) {
        const category = queue.shift();
        if (category?.id === id) {
          return category;
        }
        if (category?.subcategories) {
          queue.push(...category.subcategories);
        }
      }
      return undefined;
    }
  
    public getAll(): Category[] {
      return this.categories;
    }
  
    public update(category: Category): void {
      const index = this.categories.findIndex(c => c.id === category.id);
      if (index === -1) {
        throw new Error(`Category with ID ${category.id} does not exist`);
      }
      this.categories[index] = category;
    }
  
    public remove(id: number): void {
      const index = this.categories.findIndex(c => c.id === id);
      if (index === -1) {
        throw new Error(`Category with ID ${id} does not exist`);
      }
      this.categories.splice(index, 1);
    }
  }
  