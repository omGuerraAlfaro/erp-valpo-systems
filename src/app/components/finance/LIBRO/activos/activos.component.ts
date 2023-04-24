import { Component, OnInit } from '@angular/core';
import { CategoriaServiceService } from 'src/app/services/categoria-service.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html',
  styleUrls: ['./activos.component.css']
})
export class ActivosComponent implements OnInit {

  catActivo: any;
  subActivo: any;
  subSubActivo: any;
  indActivo: any;

  constructor(public data: CategoryService) { }

  ngOnInit(): void {

    this.data.getSumActivo().subscribe((data) => {
      this.catActivo = data;
      console.log(this.catActivo);
    });
    



    // //activos
    // this.data.getCategoryActivoValor().subscribe((data) => {
    //   //Activos
    //   const { categoria } = data;
    //   const cat = [categoria];
    //   cat.map((categoria: { cod: any; nombre_cod: any; valor: any;}) => ({
    //     cod: categoria.cod,
    //     nombre_cod: categoria.nombre_cod,
    //     valor: categoria.valor
    //   })
    //   );
    //   this.catActivo = cat;
    //   console.log(this.catActivo);

    //   //subcategoria activos
    //   const { sub_categoria } = categoria;
    //   const sub = sub_categoria;
    //   console.log(sub);
    //   sub.filter((sub_categoria: { cod: any; nombre_cod: any; valor: any; index_sub:any; }) => ({
    //     cod: sub_categoria.cod,
    //     nombre_cod: sub_categoria.nombre_cod,
    //     valor: sub_categoria.valor,
    //     index_sub: sub_categoria.index_sub
    //   })
    //   );         
    //   this.subActivo = sub;
    //   console.log(this.subActivo);

    //   //indicadores activos
    //   const dataIndicadores = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; index_sub: any; }) {
    //     return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; indicador: any }) {
    //       return subCategoria.indicador.map(function (indicador: { cod: any; nombre_cod: any; valor: any; }) {
    //         let cod_indicadores = indicador.cod
    //         let name_indicadores = indicador.nombre_cod
    //         let valor_indicadores = indicador.valor
    //         return {
    //           cod: cod_indicadores,
    //           nombre_cod: name_indicadores,
    //           valor: valor_indicadores,
    //         }
    //       });
    //     });
    //   });;
    //   this.indActivo = dataIndicadores.flat();

      
    //   //sub indicadores activos
    //   const dataSubIndex = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; valor:any; index_sub: any; }) {
    //     return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; valor:any; indicador: any }) {
    //       let cod_indicadores = subCategoria.cod
    //       let name_indicadores = subCategoria.nombre_cod
    //       let valor_indicadores = subCategoria.valor
    //       return {
    //         cod: cod_indicadores,
    //         nombre_cod: name_indicadores,
    //         valor: valor_indicadores,
    //       }
    //     });
    //   });
    //   console.log(dataSubIndex);
    //   this.subSubActivo = dataSubIndex;
    // });

  }

}

