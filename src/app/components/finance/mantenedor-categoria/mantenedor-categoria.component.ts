import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { DataCategoryService } from 'src/app/services/data-category.service';
import { CategoryManager } from './manager';


@Component({
  selector: 'app-mantenedor-categoria',
  templateUrl: './mantenedor-categoria.component.html',
  styleUrls: ['./mantenedor-categoria.component.css']
})
export class MantenedorCategoriaComponent implements OnInit {

  
  infoCategorias: Category[] = [];

  constructor(private data: DataCategoryService) { }

  ngOnInit(): void {


    this.data.getCategory().subscribe((data) => {
      const manager = new CategoryManager(data);
      console.log(manager.getAll());
      this.infoCategorias = manager.getAll();
      console.log(this.infoCategorias);
      
    });
  }
  
}
