import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { DataCategoryService } from 'src/app/services/data-category.service';


@Component({
  selector: 'app-mantenedor-categoria',
  templateUrl: './mantenedor-categoria.component.html',
  styleUrls: ['./mantenedor-categoria.component.css']
})
export class MantenedorCategoriaComponent implements OnInit {
  infoCategoria: any;
  infoSubCategoria: any;
  infoIndicadores: any;
  info1: any;

  constructor(private data: DataCategoryService) { }

  ngOnInit(): void {
    this.data.getCategory().subscribe((data) => {
      const { categoria } = data;
      const { sub_categoria } = categoria;
      // console.log(categoria);
      // console.log(sub_categoria);

      const dataCategoria = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; }) {
        let cod_subCategoria = sub_categoria.cod
        let name_subCategoria = sub_categoria.nombre_cod
        return {
          cod: cod_subCategoria,
          nombre_cod: name_subCategoria
        }
      });
      console.log(dataCategoria);
      


      const dataSubCategoria = categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; index_sub:any; }) {
        return sub_categoria.index_sub.map(function (indicador: { cod: any; nombre_cod:any; }) {
          console.log(indicador);
          
          let cod_indicador = indicador.cod
          let name_indicador = indicador.nombre_cod
          return {
            cod: cod_indicador,
            nombre_cod: name_indicador
          }
        });        
      });  
      console.log(dataSubCategoria);
      this.infoCategoria = Object.values(dataCategoria);
      console.log(this.infoCategoria);

      this.infoSubCategoria = Object.values(dataSubCategoria);
      console.log(this.infoSubCategoria);



    });
  }



}


