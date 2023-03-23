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

  infoCategoriaPatrimonio: any;
  infoSubCategoriaPatrimonio: any;
  infoIndicadoresPatrimonio: any;

  infoCategoriaIngreso: any;
  infoSubCategoriaIngreso: any;
  infoIndicadoresIngreso: any;

  infoCategoriaEgreso: any;
  infoSubCategoriaEgreso: any;
  infoIndicadoresEgreso: any;

  constructor(private data: DataCategoryService) { }

  ngOnInit(): void {
    //activos
    this.data.getCategoryActivo().subscribe((data) => {
      const { categoria } = data;
      const { sub_categoria } = categoria;
      //categoria
      const dataCategoria = sub_categoria.map((categoria: { cod: any; nombre_cod: any; }) => ({
          cod: categoria.cod,
          nombre_cod: categoria.cod
        })
      );
      //subcategoria activos
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
      //indicadores activos
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
      //subcategoria pasivos
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
      //indicadores pasivos
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
    //Patrimonio
    this.data.getCategoryPatrimonio().subscribe((data) => {
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
      //subcategoria patrimonio
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
      //indicadores patrimonio
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
      this.infoCategoriaPatrimonio = dataCategoria;
      this.infoSubCategoriaPatrimonio = dataSubCategoria
      this.infoIndicadoresPatrimonio = dataIndicadores.flat();
    });
    //Ingreso
    this.data.getCategoryIngreso().subscribe((data) => {
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
      //subcategoria ingreso
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
      //indicadores ingreso
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
      this.infoCategoriaIngreso = dataCategoria;
      this.infoSubCategoriaIngreso = dataSubCategoria
      this.infoIndicadoresIngreso = dataIndicadores.flat();
    });
    //Egreso 
    this.data.getCategoryEgreso().subscribe((data) => {
      const { categoria } = data;
      const { sub_categoria } = categoria;
      //categoria egreso
      const dataCategoria = sub_categoria.flatMap(function (categoria: { cod: any; nombre_cod: any; }) {
        let cod_subCategoria = categoria.cod
        let name_subCategoria = categoria.nombre_cod
        return {
          cod: cod_subCategoria,
          nombre_cod: name_subCategoria
        }
      });
      //subcategoria egreso
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
      //indicadores egreso
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
      this.infoCategoriaEgreso = dataCategoria;
      this.infoSubCategoriaEgreso = dataSubCategoria
      this.infoIndicadoresEgreso = dataIndicadores.flat();
    });
  }


  addCategory(){    
  }

  editCategory(){
  }

  removeCategory(){
  }



}


