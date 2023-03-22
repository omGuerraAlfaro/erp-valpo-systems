import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { DataCategoryService } from 'src/app/services/data-category.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-mantenedor-categoria',
  templateUrl: './mantenedor-categoria.component.html',
  styleUrls: ['./mantenedor-categoria.component.css']
})
export class MantenedorCategoriaComponent implements OnInit {
  infoCategoriaActivo: any;
  infoSubCategoriaActivo: any;
  infoIndicadoresActivo: any;

  infoCategoriaPasivo: any;
  infoSubCategoriaPasivo: any;
  infoIndicadoresPasivo: any;

  info1: any;

  constructor(private data: DataCategoryService) { }

  ngOnInit(): void {
    this.data.getCategoryActivo().subscribe((data) => {
      const { categoria } = data;
      const { sub_categoria } = categoria;
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
      this.infoCategoriaActivo = dataCategoria;
      this.infoSubCategoriaActivo = dataSubCategoria
      this.infoIndicadoresActivo = dataIndicadores.flat();
    });
    //pasivos
    this.data.getCategoryPasivo().subscribe((data) => {
      const { categoria } = data;
      const { sub_categoria } = categoria;
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
      this.infoCategoriaPasivo = dataCategoria;
      this.infoSubCategoriaPasivo = dataSubCategoria
      this.infoIndicadoresPasivo = dataIndicadores.flat();
    });
  }


  addCategory(){
    
  }



}


