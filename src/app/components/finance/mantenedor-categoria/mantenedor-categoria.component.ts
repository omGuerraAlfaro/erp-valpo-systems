import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { DataCategoryService } from 'src/app/services/data-category.service';


@Component({
  selector: 'app-mantenedor-categoria',
  templateUrl: './mantenedor-categoria.component.html',
  styleUrls: ['./mantenedor-categoria.component.css']
})
export class MantenedorCategoriaComponent implements OnInit {


  infoCategorias: any[] = [];
  info:any;

  constructor(private data: DataCategoryService) { }

  ngOnInit(): void {


    this.data.getCategory().subscribe((data) => {
      Object.entries(data);
      console.log(Object.entries(data));
      

      console.log(data.activo);
      console.log(data[1]);
      
      


      

      

    });
  }

}
