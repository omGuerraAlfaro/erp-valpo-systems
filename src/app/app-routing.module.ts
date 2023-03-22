import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/template/content/content.component';
import { HomeComponent } from './components/template/home/home.component';
import { LoginComponent } from './components/template/login/login.component';

//Cliente
import { ClientComponent } from './components/client/client.component';

//Finanzas
import { FacturaComponent } from './components/finance/factura/factura.component';
import { CategoryFacturaComponent } from './components/category-factura/category-factura.component';
import { OrdenCompraComponent } from './components/finance/orden-compra/orden-compra.component';
import { FlujoCajaComponent } from './components/finance/flujo-caja/flujo-caja.component';
import { FlujoEfectivoComponent } from './components/finance/flujo-efectivo/flujo-efectivo.component';
import { PreEfectivoComponent } from './components/finance/pre-efectivo/pre-efectivo.component';
import { MantenedorCategoriaComponent } from './components/finance/mantenedor-categoria/mantenedor-categoria.component';
//Libro de Banco
import { LibroBancoComponent } from './components/finance/libro-banco/libro-banco.component';
import { ActivosComponent } from './components/finance/LIBRO/activos/activos.component';
import { PasivosComponent } from './components/finance/LIBRO//pasivos/pasivos.component';
import { PatrimonioComponent } from './components/finance/LIBRO//patrimonio/patrimonio.component';
import { IngresosComponent } from './components/finance/LIBRO//ingresos/ingresos.component';
import { EgresosComponent } from './components/finance/LIBRO//egresos/egresos.component';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { RemuneracionesComponent } from './components/remuneraciones/remuneraciones.component';
//recursos humanos


// import { AuthGuardGuard } from './guards/auth-guard.guard';
// import { NoAuthGuardGuard } from './guards/no-auth-guard.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'client', component: ClientComponent },
  { path: 'factura', component: FacturaComponent },
  { path: 'category-factura', component: CategoryFacturaComponent },
  { path: 'orden-compra', component: OrdenCompraComponent },
  { path: 'content', component: ContentComponent },
  { path: 'flujo-caja', component: FlujoCajaComponent },
  { path: 'flujo-efectivo', component: FlujoEfectivoComponent },
  { path: 'pre-efectivo', component: PreEfectivoComponent },
  { path: 'mantenedor', component: MantenedorCategoriaComponent },
  {
    path: 'libro-banco',
    component: LibroBancoComponent,
    children: [
      { path: 'pasivos', component: PasivosComponent },
      { path: 'activos', component: ActivosComponent },
      { path: 'patrimonio', component: PatrimonioComponent },
      { path: 'ingresos', component: IngresosComponent },
      { path: 'egresos', component: EgresosComponent }
    ]
  },
  { path: 'colaboradores', component: ColaboradoresComponent},
  { path: 'remuneraciones', component: RemuneracionesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }