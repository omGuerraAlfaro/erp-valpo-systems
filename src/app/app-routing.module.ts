import { AuthGuard } from '../guard/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/template/content/content.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
//Cliente Proveedor
import { ClientComponent } from './components/clientes-proveedores/client/client.component';
import { ProveedorComponent } from './components/clientes-proveedores/proveedor/proveedor.component';
//Finanzas
import { FacturaComponent } from './components/finance/factura/factura.component';
import { CategoryFacturaComponent } from './components/finance/category-factura/category-factura.component';
import { OrdenCompraComponent } from './components/finance/orden-compra/orden-compra.component';
import { FlujoCajaComponent } from './components/finance/flujo-caja/flujo-caja.component';
import { FlujoEfectivoComponent } from './components/finance/flujo-efectivo/flujo-efectivo.component';
import { PreEfectivoComponent } from './components/finance/pre-efectivo/pre-efectivo.component';
import { MantenedorCategoriaComponent } from './components/finance/mantenedor-categoria/mantenedor-categoria.component';
//Libro de Banco
import { LibroBancoComponent } from './components/finance/LIBRO/libro-banco/libro-banco.component';
import { ActivosComponent } from './components/finance/LIBRO/activos/activos.component';
import { PasivosComponent } from './components/finance/LIBRO//pasivos/pasivos.component';
import { PatrimonioComponent } from './components/finance/LIBRO//patrimonio/patrimonio.component';
import { IngresosComponent } from './components/finance/LIBRO//ingresos/ingresos.component';
import { EgresosComponent } from './components/finance/LIBRO//egresos/egresos.component';
import { ResumenLibroComponent } from './components/finance/LIBRO/resumen-libro/resumen-libro.component';
//recursos humanos
import { ColaboradoresComponent } from './components/rrhh/colaboradores/colaboradores.component';
import { RemuneracionesComponent } from './components/rrhh/remuneraciones/remuneraciones.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, },
  { path: 'content', component: ContentComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'client', component: ClientComponent },
  { path: 'proveedor', component: ProveedorComponent},
  { path: 'factura', component: FacturaComponent },
  { path: 'category-factura', component: CategoryFacturaComponent },
  { path: 'orden-compra', component: OrdenCompraComponent },
  { path: 'flujo-caja', component: FlujoCajaComponent },
  { path: 'flujo-efectivo', component: FlujoEfectivoComponent },
  { path: 'pre-ejecutado', component: PreEfectivoComponent },
  { path: 'mantenedor', component: MantenedorCategoriaComponent },
  {
    path: 'libro-banco',
    component: LibroBancoComponent,
    children: [
      { path: 'pasivos', component: PasivosComponent },
      { path: 'activos', component: ActivosComponent },
      { path: 'patrimonio', component: PatrimonioComponent },
      { path: 'ingresos', component: IngresosComponent },
      { path: 'egresos', component: EgresosComponent },
      { path: 'resumen-libro', component: ResumenLibroComponent},
    ]
  },
  { path: 'colaboradores', component: ColaboradoresComponent},
  { path: 'remuneraciones', component: RemuneracionesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }