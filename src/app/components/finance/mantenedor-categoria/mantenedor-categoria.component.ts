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

      //categoria
      const dataCategoria = sub_categoria.flatMap(function (categoria: { cod: any; nombre_cod: any; }) {
        let cod_subCategoria = categoria.cod
        let name_subCategoria = categoria.nombre_cod
        return {
          cod: cod_subCategoria,
          nombre_cod: name_subCategoria
        }
      });

      //subcategoria
      const dataSubCategoria = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; index_sub: any; }) {
        return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; indicador: any }) {
          let cod_subCategoria = subCategoria.cod
          let name_subCategoria = subCategoria.nombre_cod
          let index_indicador = subCategoria.indicador
          return {
            cod: cod_subCategoria,
            nombre_cod: name_subCategoria,
            indicador: index_indicador

          }
        });
      });


      //indicadores
      const dataIndicadores = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; index_sub: any; }) {
        return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; indicador: any }) {
          return subCategoria.indicador.map(function (indicador: { cod: any; nombre_cod: any; }) {
            let cod_indicadores = indicador.cod
            let name_indicadores = indicador.nombre_cod
            return {
              cod: cod_indicadores,
              nombre_cod: name_indicadores
            }
          });
        });
      });


      this.infoCategoria = dataCategoria;
      console.log(this.infoCategoria);

      this.infoSubCategoria = dataSubCategoria
      console.log(this.infoSubCategoria);

      this.infoIndicadores = dataIndicadores.flat();
      console.log(this.infoIndicadores);



    });
  }



}


