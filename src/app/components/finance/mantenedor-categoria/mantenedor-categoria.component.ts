import { Component, OnInit } from '@angular/core';
import { CategoriaServiceService } from 'src/app/services/categoria-service.service';


@Component({
  selector: 'app-mantenedor-categoria',
  templateUrl: './mantenedor-categoria.component.html',
  styleUrls: ['./mantenedor-categoria.component.css']
})
export class MantenedorCategoriaComponent implements OnInit {

  vars = [
    {
      name: 'Saldo Final del Banco Mes Anterior',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-efectivo'
    },
    {
      name: 'Total Ingresos',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-efectivo'
    },
    {
      name: 'Total Costos y Gastos',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-efectivo'
    },
    {
      name: 'Total Costos de Explotación',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-efectivo'
    },
    {
      name: 'Total Gastos',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-efectivo'
    },
    {
      name: 'Aumento y Disminución de Activos',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-efectivo'
    },
    {
      name: 'Aumento y Disminución de Pasivos',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-efectivo'
    },
    {
      name: 'Saldo Final del Banco',
      mount: 1000000,
      date: '2021-01-01',
      link: 'flujo-efectivo'
    }
  ]

  catEgreso: any;
  subEgreso: any;
  subSubEgreso: any;
  indEgreso: any;

  catIngreso: any;
  subIngreso: any;
  subSubIngreso: any;
  indIngreso: any;

  catActivo: any;
  subActivo: any;
  subSubActivo: any;
  indActivo: any;

  catPasivo: any;
  subPasivo: any;
  subSubPasivo: any;
  indPasivo: any;

  catPatri: any;
  subPatri: any;
  subSubPatri: any;
  indPatri: any;

  constructor(private data: CategoriaServiceService) {
  }

  ngOnInit(): void {
    //Egresos
    this.data.getCategoryEgresoValor().subscribe((data) => {
      //categoria
      const { categoria } = data;
      const cat = [categoria];
      cat.map((categoria: { cod: any; nombre_cod: any; valor: any; }) => ({
        cod: categoria.cod,
        nombre_cod: categoria.nombre_cod,
        valor: categoria.valor
      })
      );
      this.catEgreso = cat;

      //subcategoria Egreso
      const { sub_categoria } = categoria;
      const sub = sub_categoria;
      sub.filter((sub_categoria: { cod: any; nombre_cod: any; valor: any; index_sub: any; }) => ({
        cod: sub_categoria.cod,
        nombre_cod: sub_categoria.nombre_cod,
        valor: sub_categoria.valor,
        index_sub: sub_categoria.index_sub
      })
      );
      this.subEgreso = sub;

      //indicadores Egreso
      const dataIndicadores = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; index_sub: any; }) {
        return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; indicador: any }) {
          return subCategoria.indicador.map(function (indicador: { cod: any; nombre_cod: any; valor: any; }) {
            let cod_indicadores = indicador.cod
            let name_indicadores = indicador.nombre_cod
            let valor_indicadores = indicador.valor
            return {
              cod: cod_indicadores,
              nombre_cod: name_indicadores,
              valor: valor_indicadores,
            }
          });
        });
      });;
      this.indEgreso = dataIndicadores.flat();


      //sub indicadores Egreso
      const dataSubIndex = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; valor: any; index_sub: any; }) {
        return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; valor: any; indicador: any }) {
          let cod_indicadores = subCategoria.cod
          let name_indicadores = subCategoria.nombre_cod
          let valor_indicadores = subCategoria.valor
          return {
            cod: cod_indicadores,
            nombre_cod: name_indicadores,
            valor: valor_indicadores,
          }
        });
      });
      this.subSubEgreso = dataSubIndex;
    });


    //Patrimonio
    this.data.getCategoryPatrimonioValor().subscribe((data) => {
      //categoria
      const { categoria } = data;
      const cat = [categoria];
      cat.map((categoria: { cod: any; nombre_cod: any; valor: any; }) => ({
        cod: categoria.cod,
        nombre_cod: categoria.nombre_cod,
        valor: categoria.valor
      })
      );
      this.catPatri = cat;

      //subcategoria Patrimonio
      const { sub_categoria } = categoria;
      const sub = sub_categoria;
      sub.filter((sub_categoria: { cod: any; nombre_cod: any; valor: any; index_sub: any; }) => ({
        cod: sub_categoria.cod,
        nombre_cod: sub_categoria.nombre_cod,
        valor: sub_categoria.valor,
        index_sub: sub_categoria.index_sub
      })
      );
      this.subPatri = sub;

      //indicadores Patrimonio
      const dataIndicadores = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; index_sub: any; }) {
        return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; indicador: any }) {
          return subCategoria.indicador.map(function (indicador: { cod: any; nombre_cod: any; valor: any; }) {
            let cod_indicadores = indicador.cod
            let name_indicadores = indicador.nombre_cod
            let valor_indicadores = indicador.valor
            return {
              cod: cod_indicadores,
              nombre_cod: name_indicadores,
              valor: valor_indicadores,
            }
          });
        });
      });;
      this.indPatri = dataIndicadores.flat();


      //sub indicadores Patrimonio
      const dataSubIndex = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; valor: any; index_sub: any; }) {
        return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; valor: any; indicador: any }) {
          let cod_indicadores = subCategoria.cod
          let name_indicadores = subCategoria.nombre_cod
          let valor_indicadores = subCategoria.valor
          return {
            cod: cod_indicadores,
            nombre_cod: name_indicadores,
            valor: valor_indicadores,
          }
        });
      });
      this.subSubPatri = dataSubIndex;
    });

    //Ingresos
    this.data.getCategoryIngresoValor().subscribe((data) => {
      //categoria
      const { categoria } = data;
      const cat = [categoria];
      cat.map((categoria: { cod: any; nombre_cod: any; valor: any; }) => ({
        cod: categoria.cod,
        nombre_cod: categoria.nombre_cod,
        valor: categoria.valor
      })
      );
      this.catIngreso = cat;

      //subcategoria Ingresos
      const { sub_categoria } = categoria;
      const sub = sub_categoria;
      sub.filter((sub_categoria: { cod: any; nombre_cod: any; valor: any; index_sub: any; }) => ({
        cod: sub_categoria.cod,
        nombre_cod: sub_categoria.nombre_cod,
        valor: sub_categoria.valor,
        index_sub: sub_categoria.index_sub
      })
      );
      this.subIngreso = sub;

      //indicadores Ingresos
      const dataIndicadores = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; index_sub: any; }) {
        return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; indicador: any }) {
          return subCategoria.indicador.map(function (indicador: { cod: any; nombre_cod: any; valor: any; }) {
            let cod_indicadores = indicador.cod
            let name_indicadores = indicador.nombre_cod
            let valor_indicadores = indicador.valor
            return {
              cod: cod_indicadores,
              nombre_cod: name_indicadores,
              valor: valor_indicadores,
            }
          });
        });
      });;
      this.indIngreso = dataIndicadores.flat();


      //sub indicadores Ingresos
      const dataSubIndex = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; valor: any; index_sub: any; }) {
        return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; valor: any; indicador: any }) {
          let cod_indicadores = subCategoria.cod
          let name_indicadores = subCategoria.nombre_cod
          let valor_indicadores = subCategoria.valor
          return {
            cod: cod_indicadores,
            nombre_cod: name_indicadores,
            valor: valor_indicadores,
          }
        });
      });
      this.subSubIngreso = dataSubIndex;
    });


    this.data.getCategoryActivoValor().subscribe((data) => {
      //Activos
      const { categoria } = data;
      const cat = [categoria];
      cat.map((categoria: { cod: any; nombre_cod: any; valor: any; }) => ({
        cod: categoria.cod,
        nombre_cod: categoria.nombre_cod,
        valor: categoria.valor
      })
      );
      this.catActivo = cat;

      //subcategoria activos
      const { sub_categoria } = categoria;
      const sub = sub_categoria;
      sub.filter((sub_categoria: { cod: any; nombre_cod: any; valor: any; index_sub: any; }) => ({
        cod: sub_categoria.cod,
        nombre_cod: sub_categoria.nombre_cod,
        valor: sub_categoria.valor,
        index_sub: sub_categoria.index_sub
      })
      );
      this.subActivo = sub;

      //indicadores activos
      const dataIndicadores = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; index_sub: any; }) {
        return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; indicador: any }) {
          return subCategoria.indicador.map(function (indicador: { cod: any; nombre_cod: any; valor: any; }) {
            let cod_indicadores = indicador.cod
            let name_indicadores = indicador.nombre_cod
            let valor_indicadores = indicador.valor
            return {
              cod: cod_indicadores,
              nombre_cod: name_indicadores,
              valor: valor_indicadores,
            }
          });
        });
      });;
      this.indActivo = dataIndicadores.flat();


      //sub indicadores activos
      const dataSubIndex = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; valor: any; index_sub: any; }) {
        return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; valor: any; indicador: any }) {
          let cod_indicadores = subCategoria.cod
          let name_indicadores = subCategoria.nombre_cod
          let valor_indicadores = subCategoria.valor
          return {
            cod: cod_indicadores,
            nombre_cod: name_indicadores,
            valor: valor_indicadores,
          }
        });
      });
      this.subSubActivo = dataSubIndex;
    });


    //Pasivos
    this.data.getCategoryPasivoValor().subscribe((data) => {
      //categoria
      const { categoria } = data;
      const cat = [categoria];
      cat.map((categoria: { cod: any; nombre_cod: any; valor: any; }) => ({
        cod: categoria.cod,
        nombre_cod: categoria.nombre_cod,
        valor: categoria.valor
      })
      );
      this.catPasivo = cat;

      //subcategoria Pasivos
      const { sub_categoria } = categoria;
      const sub = sub_categoria;
      sub.filter((sub_categoria: { cod: any; nombre_cod: any; valor: any; index_sub: any; }) => ({
        cod: sub_categoria.cod,
        nombre_cod: sub_categoria.nombre_cod,
        valor: sub_categoria.valor,
        index_sub: sub_categoria.index_sub
      })
      );
      this.subPasivo = sub;

      //sub indicadores Pasivos
            const dataSubIndex = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; valor: any; index_sub: any; }) {
              return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; valor: any; indicador: any }) {
                let cod_indicadores = subCategoria.cod
                let name_indicadores = subCategoria.nombre_cod
                let valor_indicadores = subCategoria.valor
                return {
                  cod: cod_indicadores,
                  nombre_cod: name_indicadores,
                  valor: valor_indicadores,
                }
              });
            });
            this.subSubPasivo = dataSubIndex;

      //indicadores Pasivos
      const dataIndicadores = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; index_sub: any; }) {
        return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; indicador: any }) {
          return subCategoria.indicador.map(function (indicador: { cod: any; nombre_cod: any; valor: any; }) {
            let cod_indicadores = indicador.cod
            let name_indicadores = indicador.nombre_cod
            let valor_indicadores = indicador.valor
            return {
              cod: cod_indicadores,
              nombre_cod: name_indicadores,
              valor: valor_indicadores,
            }
          });
        });
      });;
      this.indPasivo = dataIndicadores.flat();


      
    });
  }


  addCategory() {
  }

  editCategory() {
  }

  removeCategory() {
  }

  
}






