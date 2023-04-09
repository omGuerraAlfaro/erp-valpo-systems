import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { CategoryInterface } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoriaInterface } from 'src/app/interfaces/categoria';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';



@Component({
  selector: 'app-mantenedor-categoria',
  templateUrl: './mantenedor-categoria.component.html',
  styleUrls: ['./mantenedor-categoria.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MantenedorCategoriaComponent implements OnInit {
  newSubCategoriaGroup = new FormGroup({
    categoria: new FormControl(''),
    cod_contable: new FormControl(''),
    descripcion: new FormControl(''),
  });
  newSubIndicadorGroup = new FormGroup({
    categoria: new FormControl(''),
    subcategoria: new FormControl(''),
    indicador: new FormControl(''),
    subindicador: new FormControl(''),
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

  catEgreso: any;
  subEgreso: any;
  subSubEgreso: any;
  indEgreso: any;

  catIngreso: any;
  subIngreso: any;
  subSubIngreso: any;
  indIngreso: any;

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

  currentRoute = this.route.snapshot.url[0].path;

  constructor(private data: CategoryService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    //toda la data de categorias.
    this.data.getAllCategory().subscribe((data: any) => {
      this.dataCat = data.map((categoria: any) => categoria.descripcion);
    });
    this.data.getAllSubCategoria().subscribe((data: CategoryInterface[]) => {
      this.dataSubCat = data.map((subcategoria: any) => subcategoria.descripcion);
    });

    this.data.getAllIndicadores().subscribe((data: CategoryInterface[]) => {
      this.dataInd = data.map((indicador: any) => indicador.descripcion);
    });

    this.data.getAllSubIndicadores().subscribe((data: CategoryInterface[]) => {
      this.dataSubInd = data.map((subindicador: any) => subindicador.descripcion);
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

  newSubCategory() {
    let id = '';
    let cod_contable: number = +this.newSubCategoriaGroup.value.cod_contable!;
    let descripcion = this.newSubCategoriaGroup.value.descripcion!;
    let fkCategoria: number = +this.newSubCategoriaGroup.value.categoria!;
    this.data.addSubCategory(id, cod_contable, descripcion, fkCategoria).subscribe((data: any) => {
      console.log("Se agregó la subcategoría");
    });
  }
  deleteSubCategory(dataInformation: any) {
    let id = dataInformation;
    this.data.deleteSubCategory(id).subscribe((data: any) => {
      console.log("Se eliminó la subcategoría");
      const extras: NavigationExtras = {
        state: {
          url: this.currentRoute
        }
      };
      this.router.navigate(['/content'], extras);
    });
  }

  onSubmit() {
    console.log(this.newSubCategoriaGroup.value);
  }

  click(any: any) {
    console.log(any);
  }

  cerrarMes() {
    console.log('cerrar mes');
  }

  addCategory() {
  }

  editCategory() {
  }

  removeCategory() {
  }





}






