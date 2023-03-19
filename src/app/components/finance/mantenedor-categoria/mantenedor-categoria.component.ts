import { Component, OnInit } from '@angular/core';
import { DataCategoryService } from 'src/app/services/data-category.service';
import { CategoryManager } from './manager';


@Component({
  selector: 'app-mantenedor-categoria',
  templateUrl: './mantenedor-categoria.component.html',
  styleUrls: ['./mantenedor-categoria.component.css']
})
export class MantenedorCategoriaComponent implements OnInit {
  
  constructor(private data: DataCategoryService, public manager: CategoryManager) { }

  ngOnInit(): void {
    this.data.getCategory().subscribe((data) => {
      console.log(data);
    });
  }

}
