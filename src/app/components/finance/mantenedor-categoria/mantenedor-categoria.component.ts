import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { CategoryInterface } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-mantenedor-categoria',
  templateUrl: './mantenedor-categoria.component.html',
  styleUrls: ['./mantenedor-categoria.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MantenedorCategoriaComponent implements OnInit {
  dataOld:any;
  editSubCategoriaGroup = new FormGroup({
    subcategoria: new FormControl(''),
    cod_contable: new FormControl(''),
    descripcion: new FormControl(''),
    id_categoria: new FormControl(''),
  });
  newSubCategoriaGroup = new FormGroup({
    subcategoria: new FormControl(''),
    cod_contable: new FormControl(''),
    descripcion: new FormControl(''),
  });
  newIndicadorGroup = new FormGroup({
    subcategoria: new FormControl(''),
    cod_contable: new FormControl(''),
    descripcion: new FormControl(''),
  });
  newSubIndicadorGroup = new FormGroup({
    indicador: new FormControl(''),
    cod_contable: new FormControl(''),
    descripcion: new FormControl(''),
  });

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

  dataCat: any;
  dataSubCat: any;
  dataInd: any;
  dataSubInd: any;

  catActivo: any;
  subCatActivo: any;
  indActivo: any;
  subIndActivo: any;  
  
  catPasivo: any;
  subPasivo: any;
  subSubPasivo: any;
  indPasivo: any;

  catPatri: any;
  subPatri: any;
  subSubPatri: any;
  indPatri: any;  
  
  catIngreso: any;
  subIngreso: any;
  subSubIngreso: any;
  indIngreso: any;
  
  catEgreso: any;
  subEgreso: any;
  subSubEgreso: any;
  indEgreso: any;
  
  currentRoute = this.route.snapshot.url[0].path;

  constructor(private data: CategoryService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    //toda la data de categorias.
    this.data.getAllCategory().subscribe((data: any) => {
      this.dataCat = data.map((categoria: any) => categoria.descripcion);
      console.log(this.dataCat);      
    });
    this.data.getAllSubCategoria().subscribe((data: CategoryInterface[]) => {
      this.dataSubCat = data.map((subcategoria: any) => subcategoria.descripcion);
      console.log(this.dataSubCat);
      
    });

    this.data.getAllIndicadores().subscribe((data: CategoryInterface[]) => {
      this.dataInd = data.map((indicador: any) => indicador.descripcion);
      console.log(this.dataInd);      
    });

    this.data.getAllSubIndicadores().subscribe((data: CategoryInterface[]) => {
      this.dataSubInd = data.map((subindicador: any) => subindicador.descripcion);
      console.log(this.dataSubInd);
    });


    //data de categorias por tipo.
    //Activos
    this.data.getCategoryAct().subscribe((data: CategoryInterface[]) => {
      this.catActivo = data;
    });
    this.data.getCategorySubAct().subscribe((data: CategoryInterface[]) => {
      this.subCatActivo = data;
    });
    this.data.getCategoryIndAct().subscribe((data: CategoryInterface[]) => {
      this.indActivo = data;
    });
    this.data.getCategorySubIndAct().subscribe((data: CategoryInterface[]) => {
      this.subIndActivo = data;
    });

    /* *************************************************************************** */
    /* *************************************************************************** */
    //Pasivos
    this.data.getCategoryPas().subscribe((data: CategoryInterface[]) => {
      this.catPasivo = data;
    });
    this.data.getCategorySubPas().subscribe((data: CategoryInterface[]) => {
      this.subPasivo = data;
    });
    this.data.getCategoryIndPas().subscribe((data: CategoryInterface[]) => {
      this.indPasivo = data;
    });
    this.data.getCategorySubIndPas().subscribe((data: CategoryInterface[]) => {
      this.subSubPasivo = data;
    });


    /* *************************************************************************** */
    /* *************************************************************************** */
    //Patrimonio
    this.data.getCategoryPat().subscribe((data: CategoryInterface[]) => {
      this.catPatri = data;
    });
    this.data.getCategorySubPat().subscribe((data: CategoryInterface[]) => {
      this.subPatri = data;
    });
    this.data.getCategoryIndPat().subscribe((data: CategoryInterface[]) => {
      this.indPatri = data;
    });
    this.data.getCategorySubIndPat().subscribe((data: CategoryInterface[]) => {
      this.subSubPatri = data;
    });

    /* *************************************************************************** */
    /* *************************************************************************** */
    //Ingresos
    this.data.getCategoryIng().subscribe((data: CategoryInterface[]) => {
      this.catIngreso = data;
    });
    this.data.getCategorySubIng().subscribe((data: CategoryInterface[]) => {
      this.subIngreso = data;
    });
    this.data.getCategoryIndIng().subscribe((data: CategoryInterface[]) => {
      this.indIngreso = data;
    });
    this.data.getCategorySubIndIng().subscribe((data: CategoryInterface[]) => {
      this.subSubIngreso = data;
    });
    /* *************************************************************************** */
    /* *************************************************************************** */
    //Egresos
    this.data.getCategoryEgr().subscribe((data: CategoryInterface[]) => {
      this.catEgreso = data;
    });
    this.data.getCategorySubEgr().subscribe((data: CategoryInterface[]) => {
      this.subEgreso = data;
    }
    );
    this.data.getCategoryIndEgr().subscribe((data: CategoryInterface[]) => {
      this.indEgreso = data;
    });
    this.data.getCategorySubIndEgr().subscribe((data: CategoryInterface[]) => {
      this.subSubEgreso = data;
    });

  }
  /* SUBCATEGORIA */
  newSubCategory() {
    let id = '';
    let cod_contable: number = +this.newSubCategoriaGroup.value.cod_contable!;
    let descripcion = this.newSubCategoriaGroup.value.descripcion!;
    let fkCategoria: number = +this.newSubCategoriaGroup.value.subcategoria!;
    this.data.addSubCategory(id, cod_contable, descripcion, fkCategoria).subscribe((data: any) => {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Sub - Categoría agregada correctamente',
        showConfirmButton: false,
        timer: 1200
      })
      console.log("Se agregó la subcategoría");
    });
  }
  deleteSubCategory(dataInformation: any) {
    let id = dataInformation;
    this.data.deleteSubCategory(id).subscribe((data: any) => {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Sub - Categoría eliminada correctamente',
        showConfirmButton: false,
        timer: 1200
      })
      console.log("Se eliminó la subcategoría");
      const extras: NavigationExtras = {
        state: {
          url: this.currentRoute
        }
      };
      this.router.navigate(['/content'], extras);
    });
  }

  /* EDIT INCOMPLETO, NO ME AGREGA LA FK DE CATEGORIA. */
  getDataEditSubCategory(dataInformation: any) {
    this.dataOld = dataInformation;
    console.log(this.dataOld);
    this.editSubCategoriaGroup.setValue({
      id_categoria: this.dataOld.id_categoria,
      cod_contable: this.dataOld.cod_contable,
      descripcion: this.dataOld.descripcion,
      subcategoria: this.dataOld.id_subcategoria,
    });    
  }  
  editSubCategory() {
    let subCategoria: number = +this.editSubCategoriaGroup.value.subcategoria!;
    let codContable: number = +this.editSubCategoriaGroup.value.cod_contable!;
    let descripcionSub = this.editSubCategoriaGroup.value.descripcion!;
    let id_categoria: number = +this.editSubCategoriaGroup.value.id_categoria!; 
    // console.log(subCategoria, codContable, descripcionSub, id_categoria);
           
    this.data.editSubCategory(subCategoria, codContable, descripcionSub, id_categoria).subscribe((data: any) => {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Sub - Categoría editada correctamente',
        showConfirmButton: false,
        timer: 1200
      })
      console.log("Se editó la subcategoría");
    });
  }
  /* INDICADORES */
  newIndicator() {
    let id = '';
    let cod_contable: number = +this.newIndicadorGroup.value.cod_contable!;
    let descripcion = this.newIndicadorGroup.value.descripcion!;
    let fkSubCategoria: number = +this.newIndicadorGroup.value.subcategoria!;
    this.data.addIndicator(id, cod_contable, descripcion, fkSubCategoria).subscribe((data: any) => {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Indicador agregado correctamente',
        showConfirmButton: false,
        timer: 1200
      })
      console.log("Se agregó el Indicador");
    });
  }
  
  deleteIndicator(dataInformation: any) {
    console.log(dataInformation);
    let id = dataInformation;
    this.data.deleteIndicator(id).subscribe((data: any) => {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Indicador eliminado correctamente',
        showConfirmButton: false,
        timer: 1200
      })
      console.log("Se eliminó el indicador");
      const extras: NavigationExtras = {
        state: {
          url: this.currentRoute
        }
      };
      this.router.navigate(['/content'], extras);
    });
  }
  /* SUBINDICADORES */
  newSubIndicator() {
    let id = '';
    let cod_contable: number = +this.newSubIndicadorGroup.value.cod_contable!;
    let descripcion = this.newSubIndicadorGroup.value.descripcion!;
    let fkIndicador: number = +this.newSubIndicadorGroup.value.indicador!;
    this.data.addSubIndicator(id, cod_contable, descripcion, fkIndicador).subscribe((data: any) => {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Sub - Indicador agregado correctamente',
        showConfirmButton: false,
        timer: 1200
      })
      this.newSubIndicadorGroup.reset();
      console.log("Se agregó el SubIndicador");
    });
  }
  deleteSubIndicator(dataInformation: any) {
    const { id_subindicador } = dataInformation;
    console.log(id_subindicador);

    this.data.deleteSubIndicator(id_subindicador).subscribe((data: any) => {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Sub - Indicador eliminado correctamente',
        showConfirmButton: false,
        timer: 1200
      })
      console.log("Se eliminó el Sub - Indicador");
      const extras: NavigationExtras = {
        state: {
          url: this.currentRoute
        }
      };
      this.router.navigate(['/content'], extras);
    });
  }


  closeModal() {
    const extras: NavigationExtras = {
      state: {
        url: this.currentRoute
      }
    };
    this.router.navigate(['/content'], extras);
  }



  click(any: any) {
    console.log(any);
  }

  cerrarMes() {
    console.log('cerrar mes');
  }






}


