import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-pasivos',
  templateUrl: './pasivos.component.html',
  styleUrls: ['./pasivos.component.css']
})
export class PasivosComponent implements OnInit {

  catPasivo: any;
  subPasivo: any;
  subSubPasivo: any;
  indPasivo: any;

  constructor(public data: CategoryService) { }

  ngOnInit(): void {

    this.data.getSumPasivo().subscribe((data:any) => {
      this.catPasivo = data;
      console.log(this.catPasivo);
    });
    
    this.data.getSumSubPasivo().subscribe((data:any) => {
      this.subPasivo = data;
      console.log(this.subPasivo);
    });
    
    // //Pasivos
    // this.data.getCategoryPasivoValor().subscribe((data) => {
    //   //categoria
    //   const { categoria } = data;
    //   const cat = [categoria];
    //   cat.map((categoria: { cod: any; nombre_cod: any; valor: any; }) => ({
    //     cod: categoria.cod,
    //     nombre_cod: categoria.nombre_cod,
    //     valor: categoria.valor
    //   })
    //   );
    //   this.catPasivo = cat;
    //   console.log(this.catPasivo);

    //   //subcategoria activos
    //   const { sub_categoria } = categoria;
    //   const sub = sub_categoria;
    //   console.log(sub);
    //   sub.filter((sub_categoria: { cod: any; nombre_cod: any; valor: any; index_sub: any; }) => ({
    //     cod: sub_categoria.cod,
    //     nombre_cod: sub_categoria.nombre_cod,
    //     valor: sub_categoria.valor,
    //     index_sub: sub_categoria.index_sub
    //   })
    //   );
    //   this.subPasivo = sub;
    //   console.log(this.subPasivo);

    //   //sub indicadores activos
    //         const dataSubIndex = sub_categoria.flatMap(function (sub_categoria: { cod: any; nombre_cod: any; valor: any; index_sub: any; }) {
    //           return sub_categoria.index_sub.map(function (subCategoria: { cod: any; nombre_cod: any; valor: any; indicador: any }) {
    //             let cod_indicadores = subCategoria.cod
    //             let name_indicadores = subCategoria.nombre_cod
    //             let valor_indicadores = subCategoria.valor
    //             return {
    //               cod: cod_indicadores,
    //               nombre_cod: name_indicadores,
    //               valor: valor_indicadores,
    //             }
    //           });
    //         });
    //         console.log(dataSubIndex);
    //         this.subSubPasivo = dataSubIndex;

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
    //   this.indPasivo = dataIndicadores.flat();      
    // });

  }
}
