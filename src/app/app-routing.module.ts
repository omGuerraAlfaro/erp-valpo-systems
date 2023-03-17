import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { FacturaComponent } from './components/factura/factura.component';
import { FlujoCajaComponent } from './components/flujo-caja/flujo-caja.component';
import { FlujoEfectivoComponent } from './components/flujo-efectivo/flujo-efectivo.component';
import { LibroBancoComponent } from './components/libro-banco/libro-banco.component';
import { OrdenCompraComponent } from './components/orden-compra/orden-compra.component';
import { PreEfectivoComponent } from './components/pre-efectivo/pre-efectivo.component';
import { ContentComponent } from './components/template/content/content.component';
import { HomeComponent } from './components/template/home/home.component';
import { LoginComponent } from './components/template/login/login.component';

// import { AuthGuardGuard } from './guards/auth-guard.guard';
// import { NoAuthGuardGuard } from './guards/no-auth-guard.guard';


const routes: Routes = [
  { path: '', component: LoginComponent} ,
  { path: 'home', component: HomeComponent},
  { path: 'client', component: ClientComponent},
  { path: 'factura', component: FacturaComponent},
  { path: 'orden-compra', component: OrdenCompraComponent},
  { path: 'content', component: ContentComponent},
  { path: 'flujo-caja', component: FlujoCajaComponent},
  { path: 'flujo-efectivo', component: FlujoEfectivoComponent},
  { path: 'pre-efectivo', component: PreEfectivoComponent},
  { path: 'libro-banco', component: LibroBancoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }