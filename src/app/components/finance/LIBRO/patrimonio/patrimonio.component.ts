import { Component, OnInit } from '@angular/core';
import { CategoriaServiceService } from 'src/app/services/categoria-service.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-patrimonio',
  templateUrl: './patrimonio.component.html',
  styleUrls: ['./patrimonio.component.css']
})
export class PatrimonioComponent implements OnInit {

  catPatri:any;
  subPatri:any;
  subSubPatri:any;
  indPatri:any;
  
  constructor(public data: CategoryService) { }

  ngOnInit(): void {
    //patrimonio
    this.data.getSumPatrimonio().subscribe((data) => {
      this.catPatri = data;
      console.log(this.catPatri);
    });


    // this.data.getCategoryPatrimonioValor().subscribe((data) => {
    //   //categoria
    //   const { categoria } = data;
    //   const cat = [categoria];
    //   cat.map((categoria: { cod: any; nombre_cod: any; valor: any;}) => ({
    //     cod: categoria.cod,
    //     nombre_cod: categoria.nombre_cod,
    //     valor: categoria.valor
    //   })
    //   );
    //   this.catPatri = cat;
    //   console.log(this.catPatri);

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
    //   this.subPatri = sub;
    //   console.log(this.subPatri);

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
    //   this.indPatri = dataIndicadores.flat();

      
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
    //   this.subSubPatri = dataSubIndex;
    // });

  }

}
