/*------------------------------IMPORTACIONES---------------------------------------------*/
/*MODULOS*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module'; 
import { FormsModule } from '@angular/forms';

/*COMPONENTE PRINCIPAL*/
import { AppComponent } from './app.component';

/*COMPONENTES GENERALES*/
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

/*SUBCOMPONENTES DE CONTENT*/
import { InicioComponent } from './content/inicio/inicio.component';
import { AdoptameComponent } from './content/adoptame/adoptame.component';
import { ReportameComponent } from './content/reportame/reportame.component';
import { VeterinariasComponent } from './content/veterinarias/veterinarias.component';
import { EventosComponent } from './content/eventos/eventos.component';
import { SesionComponent } from './sesion/sesion.component';
import { RegistroComponent } from './registro/registro.component';


/*COMPONENTES PARA RUTAS*/
import { RouterModule, Routes } from '@angular/router';

/*COMPONENTE PARA CARRUSEL*/
import { OwlModule } from 'ngx-owl-carousel';
import { PracticasComponent } from './practicas/practicas.component';

/*FIREBASE*/
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';

/*SERVICIOS*/
import { CrudService } from './servicios/crud.service';
import { Practicas2Component } from './practicas2/practicas2.component';

/*------------------------------DECLARACIONES----------------------------------------------*/

/*DECLARACION DE RUTAS*/
const appRoutes: Routes = [
  { path:'', component:InicioComponent },
  { path:'inicio', component:InicioComponent },
  { path:'adoptame', component:AdoptameComponent },
  { path:'reportame', component:ReportameComponent },
  { path:'veterinarias', component:VeterinariasComponent },
  { path:'eventos', component:EventosComponent },
  { path:'sesion', component:SesionComponent },
  { path:'registro', component:RegistroComponent },
  { path:'practicas', component:PracticasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    InicioComponent,
    AdoptameComponent,
    ReportameComponent,
    VeterinariasComponent,
    EventosComponent,
    SesionComponent,
    RegistroComponent,
    PracticasComponent,
    Practicas2Component
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    OwlModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
